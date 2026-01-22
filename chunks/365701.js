n.d(t, {
    Ay: () => P,
    Jx: () => T,
    lz: () => I,
}),
    n(733351),
    n(228524),
    n(896048);
var r,
    i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    c = n(284009),
    o = n.n(c),
    d = n(311907),
    u = n(827734),
    f = n(36525),
    g = n(421380),
    b = n(397927),
    m = n(73153),
    p = n(416052),
    x = n(198982),
    h = n(292572),
    j = n(122906),
    O = n(539440),
    y = n(555337),
    v = n(401755),
    A = n(985018),
    E = n(776433),
    N = n(473169);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class S extends (r = d.Ay.Store) {
    initialize() {
        this.waitFor(y.A, j.A);
    }
    getTemplate() {
        let e = y.A.getProps().guild;
        if (null == e) return null;
        let t = j.A.getForGuild(e.id);
        return null != t && t.state !== v.QB.RESOLVING ? t : null;
    }
    showNotice() {
        let e = this.getTemplate();
        return (
            null != e && null != this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description)
        );
    }
    constructor(...e) {
        super(...e),
            _(this, "name", ""),
            _(this, "description", ""),
            _(this, "error", null),
            _(this, "reset", () => {
                let e = this.getTemplate();
                if (null != e) {
                    var t, n;
                    (this.name = null != (t = e.name) ? t : this.name),
                        (this.description = null != (n = e.description) ? n : this.description);
                } else (this.name = ""), (this.description = "");
                this.emitChange();
            }),
            _(this, "setName", (e) => {
                (this.name = e), this.emitChange();
            }),
            _(this, "setDescription", (e) => {
                (this.description = e), this.emitChange();
            }),
            _(this, "setError", (e) => {
                (this.error = e), this.emitChange();
            }),
            _(this, "save", async () => {
                await h.A.updateGuildTemplate(
                    y.A.getProps().guild.id,
                    this.getTemplate().code,
                    this.name,
                    this.description,
                ),
                    this.emitChange();
            });
    }
}
_(S, "displayName", "GuildSettingsTemplateMetadataStore_");
let T = new S(m.h);
function I() {
    let [e, t] = l.useState(!1),
        n = async () => {
            t(!0), await T.save(), t(!1);
        };
    return (0, i.jsx)(f.A, {
        submitting: e,
        onReset: T.reset,
        onSave: n,
        disabled: !C(T.name),
    });
}
function C(e) {
    return null != e && e.trim().length >= 2;
}
function P() {
    return (0, i.jsx)("div", {
        className: N.Q5,
        children: (0, i.jsxs)(b.Fmo, {
            component: (0, i.jsx)(b.Heading, {
                variant: "heading-lg/semibold",
                children: A.intl.string(A.t.KUw7Ss),
            }),
            children: [
                (0, i.jsx)(b.Text, {
                    className: N.SX,
                    variant: "text-sm/normal",
                    children: A.intl.format(A.t.c0m8bK, {}),
                }),
                (0, i.jsx)(R, {}),
                (0, i.jsx)(b.cGx, { className: E.yF }),
                (0, i.jsx)(w, {}),
            ],
        }),
    });
}
function w() {
    let { guild: e } = y.A.getProps();
    o()(null != e, "guild cannot be null");
    let t = (0, d.bG)([T], () => T.error),
        [n, r] = l.useState(!0),
        { loading: s, guildTemplate: a } = (function (e) {
            let [t, n] = l.useState(!0);
            return (
                l.useEffect(() => {
                    !(async function () {
                        n(!0);
                        try {
                            await h.A.loadTemplatesForGuild(e), n(!1);
                        } catch (e) {
                            T.setError(new x.LG(e));
                        }
                    })();
                }, [e]),
                {
                    loading: t,
                    guildTemplate: (0, d.bG)([j.A], () => j.A.getForGuild(e), [e]),
                }
            );
        })(e.id);
    if (
        (l.useEffect(() => {
            if (n && !s) {
                if (null != a) {
                    var e, t;
                    T.setName(null != (e = a.name) ? e : ""), T.setDescription(null != (t = a.description) ? t : "");
                }
                r(!1);
            }
        }, [n, a, s]),
        l.useEffect(
            () => () => {
                T.reset(), T.setError(null);
            },
            [],
        ),
        n)
    )
        return null != t
            ? (0, i.jsx)(b.Text, {
                  color: "text-feedback-critical",
                  variant: "text-sm/normal",
                  children: t.message,
              })
            : (0, i.jsx)(b.y$y, { className: N.eT });
    let c =
        null != t && null == t.getFirstFieldErrorMessage("name") && null == t.getFirstFieldErrorMessage("description");
    return (0, i.jsxs)(b.BJc, {
        gap: 20,
        children: [
            (0, i.jsx)(G, {}),
            (0, i.jsx)(L, {
                guild: e,
                guildTemplate: a,
            }),
            c
                ? (0, i.jsx)(b.Text, {
                      className: N.Ot,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: t.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
function R() {
    return (0, i.jsxs)("div", {
        className: E.qR,
        children: [
            (0, i.jsxs)("div", {
                className: E.eg,
                children: [
                    (0, i.jsx)(b.Heading, {
                        variant: "eyebrow",
                        children: A.intl.string(A.t["f8u+VO"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: E.VP,
                        children: [
                            (0, i.jsx)(b.yr3, {
                                size: "md",
                                className: E.Sy,
                                color: u.A.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.A.unsafe_rawColors.WHITE.css,
                            }),
                            A.intl.string(A.t.K2tn16),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: E.VP,
                        children: [
                            (0, i.jsx)(b.yr3, {
                                size: "md",
                                className: E.Sy,
                                color: u.A.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.A.unsafe_rawColors.WHITE.css,
                            }),
                            A.intl.string(A.t.om5gNq),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: E.VP,
                        children: [
                            (0, i.jsx)(b.yr3, {
                                size: "md",
                                className: E.Sy,
                                color: u.A.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.A.unsafe_rawColors.WHITE.css,
                            }),
                            A.intl.string(A.t["/VNqdD"]),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: E.eg,
                children: [
                    (0, i.jsx)(b.Heading, {
                        variant: "eyebrow",
                        children: A.intl.string(A.t["8zhJEr"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: E.VP,
                        children: [
                            (0, i.jsx)(b.aXh, {
                                size: "md",
                                className: E.Sy,
                                color: u.A.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.A.unsafe_rawColors.WHITE.css,
                            }),
                            A.intl.string(A.t.WOKI6t),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: E.VP,
                        children: [
                            (0, i.jsx)(b.aXh, {
                                size: "md",
                                className: E.Sy,
                                color: u.A.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.A.unsafe_rawColors.WHITE.css,
                            }),
                            A.intl.string(A.t.ddhDJH),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: E.VP,
                        children: [
                            (0, i.jsx)(b.aXh, {
                                size: "md",
                                className: E.Sy,
                                color: u.A.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.A.unsafe_rawColors.WHITE.css,
                            }),
                            A.intl.string(A.t["6Q/DHk"]),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function D(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(b.MJ3, {
        dismissable: !0,
        header: A.intl.string(A.t["cN/RFD"]),
        confirmText: A.intl.string(A.t["cN/RFD"]),
        cancelText: A.intl.string(A.t["ETE/oC"]),
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(b.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: A.intl.string(A.t["apCQv/"]),
        }),
    });
}
function G() {
    let e = (0, d.bG)([T], () => T.name),
        t = (0, d.bG)([T], () => T.description),
        n = (0, d.bG)([T], () => T.error),
        [r, s] = l.useState(!1),
        a = l.useCallback(() => {
            s(!1);
        }, []),
        c = l.useCallback(() => {
            s(!0);
        }, []),
        o = l.useMemo(() => {
            if (!(r || e.length < 1 || C(e))) return A.intl.string(A.t.IHAlh1);
        }, [e, r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(b.ksK, {
                label: A.intl.string(A.t.z1a9R1),
                required: !0,
                error: null != o ? o : null == n ? void 0 : n.getFirstFieldErrorMessage("name"),
                value: e,
                onChange: (e) => T.setName(e),
                placeholder: A.intl.string(A.t.bMlpvk),
                maxLength: 100,
                onBlur: a,
                onFocus: c,
                autoFocus: !0,
            }),
            (0, i.jsx)(b.fs1, {
                label: A.intl.string(A.t.GxirWa),
                error: null == n ? void 0 : n.getFirstFieldErrorMessage("description"),
                value: t,
                onChange: (e) => T.setDescription(e),
                placeholder: A.intl.string(A.t.n1FBXh),
                maxLength: 120,
            }),
        ],
    });
}
function L(e) {
    let { guild: t, guildTemplate: n } = e;
    return null == n
        ? (0, i.jsx)(k, { guild: t })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(b.D0$, {
                      label: A.intl.string(A.t.zGGcLw),
                      children: (0, i.jsx)(p.A, {
                          buttonLook: g.$n.Looks.FILLED,
                          buttonColor: g.$n.Colors.BRAND,
                          value: (0, O.A)(n.code),
                      }),
                  }),
                  n.isDirty &&
                      (0, i.jsx)(b.Text, {
                          color: "text-feedback-warning",
                          className: N.Ot,
                          variant: "text-sm/normal",
                          children: A.intl.string(A.t.aWsjtD),
                      }),
                  (0, i.jsxs)("div", {
                      className: a()(N.QX, E.UD),
                      children: [
                          n.isDirty &&
                              (0, i.jsx)(M, {
                                  guild: t,
                                  guildTemplate: n,
                              }),
                          (0, i.jsxs)("div", {
                              className: E.eS,
                              children: [
                                  (0, i.jsx)(U, {
                                      guild: t,
                                      guildTemplate: n,
                                  }),
                                  (0, i.jsx)(F, { guildTemplate: n }),
                              ],
                          }),
                      ],
                  }),
                  n.isDirty &&
                      (0, i.jsx)("div", {
                          className: E.U2,
                          children: A.intl.format(A.t.v0AVum, { timestamp: new Date(n.updatedAt) }),
                      }),
              ],
          });
}
function k(e) {
    let { guild: t } = e,
        n = (0, d.bG)([T], () => T.name),
        [r, s] = l.useState(!1),
        a = async () => {
            T.setError(null), s(!0);
            try {
                await h.A.createGuildTemplate(t.id, T.name, T.description);
            } catch (e) {
                T.setError(new x.LG(e));
            }
            s(!1);
        };
    return (0, i.jsx)(b.Button, {
        variant: "primary",
        text: A.intl.string(A.t.Wxdi8A),
        loading: r,
        disabled: !C(n),
        onClick: a,
    });
}
function M(e) {
    let { guild: t, guildTemplate: n } = e,
        [r, s] = l.useState(!1),
        a = async () => {
            T.setError(null), s(!0);
            try {
                await h.A.syncGuildTemplate(t.id, n.code);
            } catch (e) {
                T.setError(new x.LG(e));
            }
            s(!1);
        };
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: E.x6,
        children: (0, i.jsx)(b.Button, {
            variant: "primary",
            text: A.intl.string(A.t["Nw+0Y/"]),
            loading: r,
            onClick: a,
        }),
    });
}
function U(e) {
    let { guild: t, guildTemplate: n } = e,
        [r, s] = l.useState(!1),
        a = async () => {
            T.setError(null);
            try {
                await h.A.deleteGuildTemplate(t.id, n.code), T.setName(""), T.setDescription("");
            } catch (e) {
                T.setError(new x.LG(e));
            }
            s(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: E.x6,
                children: (0, i.jsx)(b.Button, {
                    variant: "critical-secondary",
                    text: A.intl.string(A.t["cN/RFD"]),
                    onClick: () => s(!0),
                }),
            }),
            r
                ? (0, i.jsx)(D, {
                      confirm: a,
                      cancel: () => s(!1),
                  })
                : null,
        ],
    });
}
function F(e) {
    let { guildTemplate: t } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: E.x6,
        children: (0, i.jsx)(b.Button, {
            variant: "secondary",
            text: A.intl.string(A.t.YI3iV6),
            onClick: () =>
                (0, b.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("7726"), n.e("4042")]).then(n.bind(n, 72715));
                    return (n) => {
                        var r, l;
                        return (0, i.jsx)(
                            e,
                            ((r = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            _(e, t, n[t]);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (l = l = { guildTemplate: t }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            r),
                        );
                    };
                }),
        }),
    });
}
