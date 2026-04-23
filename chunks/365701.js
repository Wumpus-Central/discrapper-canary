n.d(t, { Ay: () => W, Jx: () => H, lz: () => V });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    d = n(311907),
    c = n(827734),
    u = n(36525),
    m = n(862482),
    g = n(707554),
    h = n(534514),
    x = n(834730),
    _ = n(404778),
    p = n(289873),
    A = n(331322),
    E = n(628284),
    f = n(285796),
    j = n(640238),
    N = n(292666),
    I = n(260598),
    C = n(452027),
    b = n(821609),
    v = n(192308),
    S = n(73153),
    T = n(416052),
    y = n(198982),
    R = n(292572),
    L = n(122906),
    D = n(539440),
    O = n(734057),
    G = n(576705),
    M = n(555337),
    k = n(652215),
    U = n(401755),
    w = n(985018),
    P = n(200510),
    B = n(818050);
class F extends d.Ay.Store {
    initialize() {
        this.waitFor(M.A, L.A);
    }
    static displayName = "GuildSettingsTemplateMetadataStore_";
    name = "";
    description = "";
    error = null;
    getTemplate() {
        let e = M.A.getProps().guild;
        if (null == e) return null;
        let t = L.A.getForGuild(e.id);
        return null != t && t.state !== U.QB.RESOLVING ? t : null;
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
        await R.A.updateGuildTemplate(M.A.getProps().guild.id, this.getTemplate().code, this.name, this.description),
            this.emitChange();
    };
    showNotice() {
        let e = this.getTemplate();
        return (
            null != e && null != this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description)
        );
    }
}
let H = new F(S.h);
function V() {
    let [e, t] = l.useState(!1),
        n = async () => {
            t(!0), await H.save(), t(!1);
        };
    return (0, i.jsx)(u.A, { submitting: e, onReset: H.reset, onSave: n, disabled: !z(H.name) });
}
function z(e) {
    return null != e && e.trim().length >= 2;
}
function W() {
    return (0, i.jsx)("div", {
        className: B.Q5,
        children: (0, i.jsxs)(g.F, {
            component: (0, i.jsx)(h.D, { variant: "heading-lg/semibold", children: w.intl.string(w.t.KUw7Ss) }),
            children: [
                (0, i.jsx)(x.E, {
                    className: B.SX,
                    variant: "text-sm/normal",
                    children: w.intl.format(w.t.c0m8bK, {}),
                }),
                (0, i.jsx)(K, {}),
                (0, i.jsx)(_.c, { className: P.yF }),
                (0, i.jsx)(Y, {}),
            ],
        }),
    });
}
function Y() {
    var e;
    let { guild: t } = M.A.getProps();
    o()(null != t, "guild cannot be null");
    let n =
            ((e = t.id),
            (0, d.bG)(
                [O.A, G.A],
                () =>
                    Object.values(O.A.getMutableGuildChannelsForGuild(e)).every((e) => G.A.can(k.xBc.VIEW_CHANNEL, e)),
                [e],
            )),
        s = (0, d.bG)([H], () => H.error),
        [r, a] = l.useState(!0),
        { loading: c, guildTemplate: u } = (function (e) {
            let [t, n] = l.useState(null != e);
            return (
                l.useEffect(() => {
                    !(async function () {
                        if (null != e) {
                            n(!0);
                            try {
                                await R.A.loadTemplatesForGuild(e), n(!1);
                            } catch (e) {
                                H.setError(new y.LG(e));
                            }
                        }
                    })();
                }, [e]),
                { loading: t, guildTemplate: (0, d.bG)([L.A], () => (null != e ? L.A.getForGuild(e) : void 0), [e]) }
            );
        })(n ? t.id : null);
    if (
        (l.useEffect(() => {
            r && !c && (null != u && (H.setName(u.name ?? ""), H.setDescription(u.description ?? "")), a(!1));
        }, [r, u, c]),
        l.useEffect(
            () => () => {
                H.reset(), H.setError(null);
            },
            [],
        ),
        !n)
    )
        return (0, i.jsx)(x.E, { color: "text-muted", variant: "text-sm/normal", children: w.intl.string(w.t.f0IPAG) });
    if (r)
        return null != s
            ? (0, i.jsx)(x.E, { color: "text-feedback-critical", variant: "text-sm/normal", children: s.message })
            : (0, i.jsx)(p.y, { className: B.eT });
    let m =
        null != s && null == s.getFirstFieldErrorMessage("name") && null == s.getFirstFieldErrorMessage("description");
    return (0, i.jsxs)(A.B, {
        gap: 20,
        children: [
            (0, i.jsx)(Z, {}),
            (0, i.jsx)(J, { guild: t, guildTemplate: u }),
            m
                ? (0, i.jsx)(x.E, {
                      className: B.Ot,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: s.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
function K() {
    return (0, i.jsxs)("div", {
        className: P.qR,
        children: [
            (0, i.jsxs)("div", {
                className: P.eg,
                children: [
                    (0, i.jsx)(h.D, { variant: "eyebrow", children: w.intl.string(w.t["f8u+VO"]) }),
                    (0, i.jsxs)("div", {
                        className: P.VP,
                        children: [
                            (0, i.jsx)(E.y, {
                                size: "md",
                                className: P.Sy,
                                color: c.A.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            w.intl.string(w.t.K2tn16),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: P.VP,
                        children: [
                            (0, i.jsx)(E.y, {
                                size: "md",
                                className: P.Sy,
                                color: c.A.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            w.intl.string(w.t.om5gNq),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: P.VP,
                        children: [
                            (0, i.jsx)(E.y, {
                                size: "md",
                                className: P.Sy,
                                color: c.A.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            w.intl.string(w.t["/VNqdD"]),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: P.eg,
                children: [
                    (0, i.jsx)(h.D, { variant: "eyebrow", children: w.intl.string(w.t["8zhJEr"]) }),
                    (0, i.jsxs)("div", {
                        className: P.VP,
                        children: [
                            (0, i.jsx)(f.a, {
                                size: "md",
                                className: P.Sy,
                                color: c.A.unsafe_rawColors.RED_400.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            w.intl.string(w.t.WOKI6t),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: P.VP,
                        children: [
                            (0, i.jsx)(f.a, {
                                size: "md",
                                className: P.Sy,
                                color: c.A.unsafe_rawColors.RED_400.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            w.intl.string(w.t.ddhDJH),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: P.VP,
                        children: [
                            (0, i.jsx)(f.a, {
                                size: "md",
                                className: P.Sy,
                                color: c.A.unsafe_rawColors.RED_400.css,
                                secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                            }),
                            w.intl.string(w.t["6Q/DHk"]),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function X(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(j.M, {
        dismissable: !0,
        header: w.intl.string(w.t["cN/RFD"]),
        confirmText: w.intl.string(w.t["cN/RFD"]),
        cancelText: w.intl.string(w.t["ETE/oC"]),
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(x.E, {
            variant: "text-md/normal",
            color: "text-default",
            children: w.intl.string(w.t["apCQv/"]),
        }),
    });
}
function Z() {
    let e = (0, d.bG)([H], () => H.name),
        t = (0, d.bG)([H], () => H.description),
        n = (0, d.bG)([H], () => H.error),
        [s, r] = l.useState(!1),
        a = l.useCallback(() => {
            r(!1);
        }, []),
        o = l.useCallback(() => {
            r(!0);
        }, []),
        c = l.useMemo(() => {
            if (!(s || e.length < 1 || z(e))) return w.intl.string(w.t.IHAlh1);
        }, [e, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(N.k, {
                label: w.intl.string(w.t.z1a9R1),
                required: !0,
                error: c ?? n?.getFirstFieldErrorMessage("name"),
                value: e,
                onChange: (e) => H.setName(e),
                placeholder: w.intl.string(w.t.bMlpvk),
                maxLength: 100,
                onBlur: a,
                onFocus: o,
                autoFocus: !0,
            }),
            (0, i.jsx)(I.f, {
                label: w.intl.string(w.t.GxirWa),
                error: n?.getFirstFieldErrorMessage("description"),
                value: t,
                onChange: (e) => H.setDescription(e),
                placeholder: w.intl.string(w.t.n1FBXh),
                maxLength: 120,
            }),
        ],
    });
}
function J(e) {
    let { guild: t, guildTemplate: n } = e;
    return null == n
        ? (0, i.jsx)(q, { guild: t })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(C.D, {
                      label: w.intl.string(w.t.zGGcLw),
                      children: (0, i.jsx)(T.A, {
                          buttonLook: m.$n.Looks.FILLED,
                          buttonColor: m.$n.Colors.BRAND,
                          value: (0, D.A)(n.code),
                      }),
                  }),
                  n.isDirty &&
                      (0, i.jsx)(x.E, {
                          color: "text-feedback-warning",
                          className: B.Ot,
                          variant: "text-sm/normal",
                          children: w.intl.string(w.t.aWsjtD),
                      }),
                  (0, i.jsxs)("div", {
                      className: r()(B.QX, P.UD),
                      children: [
                          n.isDirty && (0, i.jsx)(Q, { guild: t, guildTemplate: n }),
                          (0, i.jsxs)("div", {
                              className: P.eS,
                              children: [
                                  (0, i.jsx)($, { guild: t, guildTemplate: n }),
                                  (0, i.jsx)(ee, { guildTemplate: n }),
                              ],
                          }),
                      ],
                  }),
                  n.isDirty &&
                      (0, i.jsx)("div", {
                          className: P.U2,
                          children: w.intl.format(w.t.v0AVum, { timestamp: new Date(n.updatedAt) }),
                      }),
              ],
          });
}
function q(e) {
    let { guild: t } = e,
        n = (0, d.bG)([H], () => H.name),
        [s, r] = l.useState(!1),
        a = async () => {
            H.setError(null), r(!0);
            try {
                await R.A.createGuildTemplate(t.id, H.name, H.description);
            } catch (e) {
                H.setError(new y.LG(e));
            }
            r(!1);
        };
    return (0, i.jsx)(b.$, {
        variant: "primary",
        text: w.intl.string(w.t.Wxdi8A),
        loading: s,
        disabled: !z(n),
        onClick: a,
    });
}
function Q(e) {
    let { guild: t, guildTemplate: n } = e,
        [s, r] = l.useState(!1),
        a = async () => {
            H.setError(null), r(!0);
            try {
                await R.A.syncGuildTemplate(t.id, n.code);
            } catch (e) {
                H.setError(new y.LG(e));
            }
            r(!1);
        };
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: P.x6,
        children: (0, i.jsx)(b.$, { variant: "primary", text: w.intl.string(w.t["Nw+0Y/"]), loading: s, onClick: a }),
    });
}
function $(e) {
    let { guild: t, guildTemplate: n } = e,
        [s, r] = l.useState(!1),
        a = async () => {
            H.setError(null);
            try {
                await R.A.deleteGuildTemplate(t.id, n.code), H.setName(""), H.setDescription("");
            } catch (e) {
                H.setError(new y.LG(e));
            }
            r(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: P.x6,
                children: (0, i.jsx)(b.$, {
                    variant: "critical-secondary",
                    text: w.intl.string(w.t["cN/RFD"]),
                    onClick: () => r(!0),
                }),
            }),
            s ? (0, i.jsx)(X, { confirm: a, cancel: () => r(!1) }) : null,
        ],
    });
}
function ee(e) {
    let { guildTemplate: t } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: P.x6,
        children: (0, i.jsx)(b.$, {
            variant: "secondary",
            text: w.intl.string(w.t.YI3iV6),
            onClick: () =>
                (0, v.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("7726"), n.e("94700")]).then(n.bind(n, 72715));
                    return (n) => (0, i.jsx)(e, { ...n, guildTemplate: t });
                }),
        }),
    });
}
