"use strict";
n.d(t, { Ay: () => y, Jx: () => I, lz: () => v });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    d = n(311907),
    c = n(827734),
    u = n(36525),
    m = n(421380),
    g = n(397927),
    x = n(73153),
    h = n(416052),
    _ = n(198982),
    A = n(292572),
    p = n(122906),
    f = n(539440),
    j = n(555337),
    N = n(401755),
    E = n(985018),
    b = n(320616),
    T = n(522759);
class C extends d.Ay.Store {
    initialize() {
        this.waitFor(j.A, p.A);
    }
    static displayName = "GuildSettingsTemplateMetadataStore_";
    name = "";
    description = "";
    error = null;
    getTemplate() {
        let e = j.A.getProps().guild;
        if (null == e) return null;
        let t = p.A.getForGuild(e.id);
        return null != t && t.state !== N.QB.RESOLVING ? t : null;
    }
    reset = () => {
        let e = this.getTemplate();
        null != e
            ? ((this.name = e.name ?? this.name), (this.description = e.description ?? this.description))
            : ((this.name = ""), (this.description = "")),
            this.emitChange();
    };
    setName = (e) => {
        (this.name = e), this.emitChange();
    };
    setDescription = (e) => {
        (this.description = e), this.emitChange();
    };
    setError = (e) => {
        (this.error = e), this.emitChange();
    };
    save = async () => {
        await A.A.updateGuildTemplate(j.A.getProps().guild.id, this.getTemplate().code, this.name, this.description),
            this.emitChange();
    };
    showNotice() {
        let e = this.getTemplate();
        return (
            null != e && null != this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description)
        );
    }
}
let I = new C(x.h);
function v() {
    let [e, t] = s.useState(!1),
        n = async () => {
            t(!0), await I.save(), t(!1);
        };
    return (0, i.jsx)(u.A, { submitting: e, onReset: I.reset, onSave: n, disabled: !S(I.name) });
}
function S(e) {
    return null != e && e.trim().length >= 2;
}
function y() {
    return (0, i.jsx)("div", {
        className: T.Q5,
        children: (0, i.jsxs)(g.Fmo, {
            component: (0, i.jsx)(g.Heading, { variant: "heading-lg/semibold", children: E.intl.string(E.t.KUw7Ss) }),
            children: [
                (0, i.jsx)(g.Text, {
                    className: T.SX,
                    variant: "text-sm/normal",
                    children: E.intl.format(E.t.c0m8bK, {}),
                }),
                (0, i.jsx)(O, {}),
                (0, i.jsx)(g.cGx, { className: b.yF }),
                (0, i.jsx)(R, {}),
            ],
        }),
    });
}
function R() {
    let { guild: e } = j.A.getProps();
    o()(null != e, "guild cannot be null");
    let t = (0, d.bG)([I], () => I.error),
        [n, l] = s.useState(!0),
        { loading: r, guildTemplate: a } = (function (e) {
            let [t, n] = s.useState(!0);
            return (
                s.useEffect(() => {
                    !(async function () {
                        n(!0);
                        try {
                            await A.A.loadTemplatesForGuild(e), n(!1);
                        } catch (e) {
                            I.setError(new _.LG(e));
                        }
                    })();
                }, [e]),
                { loading: t, guildTemplate: (0, d.bG)([p.A], () => p.A.getForGuild(e), [e]) }
            );
        })(e.id);
    if (
        (s.useEffect(() => {
            n && !r && (null != a && (I.setName(a.name ?? ""), I.setDescription(a.description ?? "")), l(!1));
        }, [n, a, r]),
        s.useEffect(
            () => () => {
                I.reset(), I.setError(null);
            },
            [],
        ),
        n)
    )
        return null != t
            ? (0, i.jsx)(g.Text, { color: "text-feedback-critical", variant: "text-sm/normal", children: t.message })
            : (0, i.jsx)(g.y$y, { className: T.eT });
    let c =
        null != t && null == t.getFirstFieldErrorMessage("name") && null == t.getFirstFieldErrorMessage("description");
    return (0, i.jsxs)(g.BJc, {
        gap: 20,
        children: [
            (0, i.jsx)(L, {}),
            (0, i.jsx)(D, { guild: e, guildTemplate: a }),
            c
                ? (0, i.jsx)(g.Text, {
                      className: T.Ot,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: t.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
function O() {
    return (0, i.jsxs)("div", {
        className: b.qR,
        children: [
            (0, i.jsxs)("div", {
                className: b.eg,
                children: [
                    (0, i.jsx)(g.Heading, { variant: "eyebrow", children: E.intl.string(E.t["f8u+VO"]) }),
                    (0, i.jsxs)("div", {
                        className: b.VP,
                        children: [
                            (0, i.jsx)(g.yr3, {
                                size: "md",
                                className: b.Sy,
                                color: c.A.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            E.intl.string(E.t.K2tn16),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: b.VP,
                        children: [
                            (0, i.jsx)(g.yr3, {
                                size: "md",
                                className: b.Sy,
                                color: c.A.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            E.intl.string(E.t.om5gNq),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: b.VP,
                        children: [
                            (0, i.jsx)(g.yr3, {
                                size: "md",
                                className: b.Sy,
                                color: c.A.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            E.intl.string(E.t["/VNqdD"]),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: b.eg,
                children: [
                    (0, i.jsx)(g.Heading, { variant: "eyebrow", children: E.intl.string(E.t["8zhJEr"]) }),
                    (0, i.jsxs)("div", {
                        className: b.VP,
                        children: [
                            (0, i.jsx)(g.aXh, {
                                size: "md",
                                className: b.Sy,
                                color: c.A.unsafe_rawColors.RED_400.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            E.intl.string(E.t.WOKI6t),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: b.VP,
                        children: [
                            (0, i.jsx)(g.aXh, {
                                size: "md",
                                className: b.Sy,
                                color: c.A.unsafe_rawColors.RED_400.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            E.intl.string(E.t.ddhDJH),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: b.VP,
                        children: [
                            (0, i.jsx)(g.aXh, {
                                size: "md",
                                className: b.Sy,
                                color: c.A.unsafe_rawColors.RED_400.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            E.intl.string(E.t["6Q/DHk"]),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function G(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(g.MJ3, {
        dismissable: !0,
        header: E.intl.string(E.t["cN/RFD"]),
        confirmText: E.intl.string(E.t["cN/RFD"]),
        cancelText: E.intl.string(E.t["ETE/oC"]),
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(g.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: E.intl.string(E.t["apCQv/"]),
        }),
    });
}
function L() {
    let e = (0, d.bG)([I], () => I.name),
        t = (0, d.bG)([I], () => I.description),
        n = (0, d.bG)([I], () => I.error),
        [l, r] = s.useState(!1),
        a = s.useCallback(() => {
            r(!1);
        }, []),
        o = s.useCallback(() => {
            r(!0);
        }, []),
        c = s.useMemo(() => {
            if (!(l || e.length < 1 || S(e))) return E.intl.string(E.t.IHAlh1);
        }, [e, l]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.ksK, {
                label: E.intl.string(E.t.z1a9R1),
                required: !0,
                error: c ?? n?.getFirstFieldErrorMessage("name"),
                value: e,
                onChange: (e) => I.setName(e),
                placeholder: E.intl.string(E.t.bMlpvk),
                maxLength: 100,
                onBlur: a,
                onFocus: o,
                autoFocus: !0,
            }),
            (0, i.jsx)(g.fs1, {
                label: E.intl.string(E.t.GxirWa),
                error: n?.getFirstFieldErrorMessage("description"),
                value: t,
                onChange: (e) => I.setDescription(e),
                placeholder: E.intl.string(E.t.n1FBXh),
                maxLength: 120,
            }),
        ],
    });
}
function D(e) {
    let { guild: t, guildTemplate: n } = e;
    return null == n
        ? (0, i.jsx)(M, { guild: t })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(g.D0$, {
                      label: E.intl.string(E.t.zGGcLw),
                      children: (0, i.jsx)(h.A, {
                          buttonLook: m.$n.Looks.FILLED,
                          buttonColor: m.$n.Colors.BRAND,
                          value: (0, f.A)(n.code),
                      }),
                  }),
                  n.isDirty &&
                      (0, i.jsx)(g.Text, {
                          color: "text-feedback-warning",
                          className: T.Ot,
                          variant: "text-sm/normal",
                          children: E.intl.string(E.t.aWsjtD),
                      }),
                  (0, i.jsxs)("div", {
                      className: r()(T.QX, b.UD),
                      children: [
                          n.isDirty && (0, i.jsx)(k, { guild: t, guildTemplate: n }),
                          (0, i.jsxs)("div", {
                              className: b.eS,
                              children: [
                                  (0, i.jsx)(U, { guild: t, guildTemplate: n }),
                                  (0, i.jsx)(P, { guildTemplate: n }),
                              ],
                          }),
                      ],
                  }),
                  n.isDirty &&
                      (0, i.jsx)("div", {
                          className: b.U2,
                          children: E.intl.format(E.t.v0AVum, { timestamp: new Date(n.updatedAt) }),
                      }),
              ],
          });
}
function M(e) {
    let { guild: t } = e,
        n = (0, d.bG)([I], () => I.name),
        [l, r] = s.useState(!1),
        a = async () => {
            I.setError(null), r(!0);
            try {
                await A.A.createGuildTemplate(t.id, I.name, I.description);
            } catch (e) {
                I.setError(new _.LG(e));
            }
            r(!1);
        };
    return (0, i.jsx)(g.Button, {
        variant: "primary",
        text: E.intl.string(E.t.Wxdi8A),
        loading: l,
        disabled: !S(n),
        onClick: a,
    });
}
function k(e) {
    let { guild: t, guildTemplate: n } = e,
        [l, r] = s.useState(!1),
        a = async () => {
            I.setError(null), r(!0);
            try {
                await A.A.syncGuildTemplate(t.id, n.code);
            } catch (e) {
                I.setError(new _.LG(e));
            }
            r(!1);
        };
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: b.x6,
        children: (0, i.jsx)(g.Button, {
            variant: "primary",
            text: E.intl.string(E.t["Nw+0Y/"]),
            loading: l,
            onClick: a,
        }),
    });
}
function U(e) {
    let { guild: t, guildTemplate: n } = e,
        [l, r] = s.useState(!1),
        a = async () => {
            I.setError(null);
            try {
                await A.A.deleteGuildTemplate(t.id, n.code), I.setName(""), I.setDescription("");
            } catch (e) {
                I.setError(new _.LG(e));
            }
            r(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: b.x6,
                children: (0, i.jsx)(g.Button, {
                    variant: "critical-secondary",
                    text: E.intl.string(E.t["cN/RFD"]),
                    onClick: () => r(!0),
                }),
            }),
            l ? (0, i.jsx)(G, { confirm: a, cancel: () => r(!1) }) : null,
        ],
    });
}
function P(e) {
    let { guildTemplate: t } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: b.x6,
        children: (0, i.jsx)(g.Button, {
            variant: "secondary",
            text: E.intl.string(E.t.YI3iV6),
            onClick: () =>
                (0, g.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("7726"), n.e("58938")]).then(n.bind(n, 72715));
                    return (n) => (0, i.jsx)(e, { ...n, guildTemplate: t });
                }),
        }),
    });
}
