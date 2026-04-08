"use strict";
n.d(t, { Ay: () => G, Jx: () => y, lz: () => R });
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
    p = n(292572),
    A = n(122906),
    f = n(539440),
    j = n(734057),
    N = n(576705),
    E = n(555337),
    C = n(652215),
    b = n(401755),
    T = n(985018),
    I = n(681409),
    v = n(885106);
class S extends d.Ay.Store {
    initialize() {
        this.waitFor(E.A, A.A);
    }
    static displayName = "GuildSettingsTemplateMetadataStore_";
    name = "";
    description = "";
    error = null;
    getTemplate() {
        let e = E.A.getProps().guild;
        if (null == e) return null;
        let t = A.A.getForGuild(e.id);
        return null != t && t.state !== b.QB.RESOLVING ? t : null;
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
        await p.A.updateGuildTemplate(E.A.getProps().guild.id, this.getTemplate().code, this.name, this.description),
            this.emitChange();
    };
    showNotice() {
        let e = this.getTemplate();
        return (
            null != e && null != this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description)
        );
    }
}
let y = new S(x.h);
function R() {
    let [e, t] = s.useState(!1),
        n = async () => {
            t(!0), await y.save(), t(!1);
        };
    return (0, i.jsx)(u.A, { submitting: e, onReset: y.reset, onSave: n, disabled: !O(y.name) });
}
function O(e) {
    return null != e && e.trim().length >= 2;
}
function G() {
    return (0, i.jsx)("div", {
        className: v.Q5,
        children: (0, i.jsxs)(g.Fmo, {
            component: (0, i.jsx)(g.Heading, { variant: "heading-lg/semibold", children: T.intl.string(T.t.KUw7Ss) }),
            children: [
                (0, i.jsx)(g.Text, {
                    className: v.SX,
                    variant: "text-sm/normal",
                    children: T.intl.format(T.t.c0m8bK, {}),
                }),
                (0, i.jsx)(D, {}),
                (0, i.jsx)(g.cGx, { className: I.yF }),
                (0, i.jsx)(L, {}),
            ],
        }),
    });
}
function L() {
    var e;
    let { guild: t } = E.A.getProps();
    o()(null != t, "guild cannot be null");
    let n =
            ((e = t.id),
            (0, d.bG)(
                [j.A, N.A],
                () =>
                    Object.values(j.A.getMutableGuildChannelsForGuild(e)).every((e) => N.A.can(C.xBc.VIEW_CHANNEL, e)),
                [e],
            )),
        l = (0, d.bG)([y], () => y.error),
        [r, a] = s.useState(!0),
        { loading: c, guildTemplate: u } = (function (e) {
            let [t, n] = s.useState(null != e);
            return (
                s.useEffect(() => {
                    !(async function () {
                        if (null != e) {
                            n(!0);
                            try {
                                await p.A.loadTemplatesForGuild(e), n(!1);
                            } catch (e) {
                                y.setError(new _.LG(e));
                            }
                        }
                    })();
                }, [e]),
                { loading: t, guildTemplate: (0, d.bG)([A.A], () => (null != e ? A.A.getForGuild(e) : void 0), [e]) }
            );
        })(n ? t.id : null);
    if (
        (s.useEffect(() => {
            r && !c && (null != u && (y.setName(u.name ?? ""), y.setDescription(u.description ?? "")), a(!1));
        }, [r, u, c]),
        s.useEffect(
            () => () => {
                y.reset(), y.setError(null);
            },
            [],
        ),
        !n)
    )
        return (0, i.jsx)(g.Text, {
            color: "text-muted",
            variant: "text-sm/normal",
            children: T.intl.string(T.t.f0IPAG),
        });
    if (r)
        return null != l
            ? (0, i.jsx)(g.Text, { color: "text-feedback-critical", variant: "text-sm/normal", children: l.message })
            : (0, i.jsx)(g.y$y, { className: v.eT });
    let m =
        null != l && null == l.getFirstFieldErrorMessage("name") && null == l.getFirstFieldErrorMessage("description");
    return (0, i.jsxs)(g.BJc, {
        gap: 20,
        children: [
            (0, i.jsx)(k, {}),
            (0, i.jsx)(U, { guild: t, guildTemplate: u }),
            m
                ? (0, i.jsx)(g.Text, {
                      className: v.Ot,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: l.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
function D() {
    return (0, i.jsxs)("div", {
        className: I.qR,
        children: [
            (0, i.jsxs)("div", {
                className: I.eg,
                children: [
                    (0, i.jsx)(g.Heading, { variant: "eyebrow", children: T.intl.string(T.t["f8u+VO"]) }),
                    (0, i.jsxs)("div", {
                        className: I.VP,
                        children: [
                            (0, i.jsx)(g.yr3, {
                                size: "md",
                                className: I.Sy,
                                color: c.A.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            T.intl.string(T.t.K2tn16),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: I.VP,
                        children: [
                            (0, i.jsx)(g.yr3, {
                                size: "md",
                                className: I.Sy,
                                color: c.A.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            T.intl.string(T.t.om5gNq),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: I.VP,
                        children: [
                            (0, i.jsx)(g.yr3, {
                                size: "md",
                                className: I.Sy,
                                color: c.A.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            T.intl.string(T.t["/VNqdD"]),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: I.eg,
                children: [
                    (0, i.jsx)(g.Heading, { variant: "eyebrow", children: T.intl.string(T.t["8zhJEr"]) }),
                    (0, i.jsxs)("div", {
                        className: I.VP,
                        children: [
                            (0, i.jsx)(g.aXh, {
                                size: "md",
                                className: I.Sy,
                                color: c.A.unsafe_rawColors.RED_400.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            T.intl.string(T.t.WOKI6t),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: I.VP,
                        children: [
                            (0, i.jsx)(g.aXh, {
                                size: "md",
                                className: I.Sy,
                                color: c.A.unsafe_rawColors.RED_400.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            T.intl.string(T.t.ddhDJH),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: I.VP,
                        children: [
                            (0, i.jsx)(g.aXh, {
                                size: "md",
                                className: I.Sy,
                                color: c.A.unsafe_rawColors.RED_400.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            T.intl.string(T.t["6Q/DHk"]),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function M(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(g.MJ3, {
        dismissable: !0,
        header: T.intl.string(T.t["cN/RFD"]),
        confirmText: T.intl.string(T.t["cN/RFD"]),
        cancelText: T.intl.string(T.t["ETE/oC"]),
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(g.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: T.intl.string(T.t["apCQv/"]),
        }),
    });
}
function k() {
    let e = (0, d.bG)([y], () => y.name),
        t = (0, d.bG)([y], () => y.description),
        n = (0, d.bG)([y], () => y.error),
        [l, r] = s.useState(!1),
        a = s.useCallback(() => {
            r(!1);
        }, []),
        o = s.useCallback(() => {
            r(!0);
        }, []),
        c = s.useMemo(() => {
            if (!(l || e.length < 1 || O(e))) return T.intl.string(T.t.IHAlh1);
        }, [e, l]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.ksK, {
                label: T.intl.string(T.t.z1a9R1),
                required: !0,
                error: c ?? n?.getFirstFieldErrorMessage("name"),
                value: e,
                onChange: (e) => y.setName(e),
                placeholder: T.intl.string(T.t.bMlpvk),
                maxLength: 100,
                onBlur: a,
                onFocus: o,
                autoFocus: !0,
            }),
            (0, i.jsx)(g.fs1, {
                label: T.intl.string(T.t.GxirWa),
                error: n?.getFirstFieldErrorMessage("description"),
                value: t,
                onChange: (e) => y.setDescription(e),
                placeholder: T.intl.string(T.t.n1FBXh),
                maxLength: 120,
            }),
        ],
    });
}
function U(e) {
    let { guild: t, guildTemplate: n } = e;
    return null == n
        ? (0, i.jsx)(P, { guild: t })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(g.D0$, {
                      label: T.intl.string(T.t.zGGcLw),
                      children: (0, i.jsx)(h.A, {
                          buttonLook: m.$n.Looks.FILLED,
                          buttonColor: m.$n.Colors.BRAND,
                          value: (0, f.A)(n.code),
                      }),
                  }),
                  n.isDirty &&
                      (0, i.jsx)(g.Text, {
                          color: "text-feedback-warning",
                          className: v.Ot,
                          variant: "text-sm/normal",
                          children: T.intl.string(T.t.aWsjtD),
                      }),
                  (0, i.jsxs)("div", {
                      className: r()(v.QX, I.UD),
                      children: [
                          n.isDirty && (0, i.jsx)(w, { guild: t, guildTemplate: n }),
                          (0, i.jsxs)("div", {
                              className: I.eS,
                              children: [
                                  (0, i.jsx)(B, { guild: t, guildTemplate: n }),
                                  (0, i.jsx)(F, { guildTemplate: n }),
                              ],
                          }),
                      ],
                  }),
                  n.isDirty &&
                      (0, i.jsx)("div", {
                          className: I.U2,
                          children: T.intl.format(T.t.v0AVum, { timestamp: new Date(n.updatedAt) }),
                      }),
              ],
          });
}
function P(e) {
    let { guild: t } = e,
        n = (0, d.bG)([y], () => y.name),
        [l, r] = s.useState(!1),
        a = async () => {
            y.setError(null), r(!0);
            try {
                await p.A.createGuildTemplate(t.id, y.name, y.description);
            } catch (e) {
                y.setError(new _.LG(e));
            }
            r(!1);
        };
    return (0, i.jsx)(g.Button, {
        variant: "primary",
        text: T.intl.string(T.t.Wxdi8A),
        loading: l,
        disabled: !O(n),
        onClick: a,
    });
}
function w(e) {
    let { guild: t, guildTemplate: n } = e,
        [l, r] = s.useState(!1),
        a = async () => {
            y.setError(null), r(!0);
            try {
                await p.A.syncGuildTemplate(t.id, n.code);
            } catch (e) {
                y.setError(new _.LG(e));
            }
            r(!1);
        };
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: I.x6,
        children: (0, i.jsx)(g.Button, {
            variant: "primary",
            text: T.intl.string(T.t["Nw+0Y/"]),
            loading: l,
            onClick: a,
        }),
    });
}
function B(e) {
    let { guild: t, guildTemplate: n } = e,
        [l, r] = s.useState(!1),
        a = async () => {
            y.setError(null);
            try {
                await p.A.deleteGuildTemplate(t.id, n.code), y.setName(""), y.setDescription("");
            } catch (e) {
                y.setError(new _.LG(e));
            }
            r(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: I.x6,
                children: (0, i.jsx)(g.Button, {
                    variant: "critical-secondary",
                    text: T.intl.string(T.t["cN/RFD"]),
                    onClick: () => r(!0),
                }),
            }),
            l ? (0, i.jsx)(M, { confirm: a, cancel: () => r(!1) }) : null,
        ],
    });
}
function F(e) {
    let { guildTemplate: t } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: I.x6,
        children: (0, i.jsx)(g.Button, {
            variant: "secondary",
            text: T.intl.string(T.t.YI3iV6),
            onClick: () =>
                (0, g.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("7726"), n.e("49040")]).then(n.bind(n, 72715));
                    return (n) => (0, i.jsx)(e, { ...n, guildTemplate: t });
                }),
        }),
    });
}
