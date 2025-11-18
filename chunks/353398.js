n.d(t, {
    Q5: () => T,
    Sf: () => S,
    ZP: () => w,
}),
    n(781311),
    n(953529),
    n(388685);
var r,
    i = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    c = n.n(o),
    d = n(442837),
    u = n(692547),
    g = n(796027),
    m = n(755721),
    p = n(481060),
    f = n(570140),
    h = n(484614),
    b = n(881052),
    x = n(751189),
    j = n(409059),
    _ = n(518936),
    v = n(999382),
    O = n(260539),
    C = n(388032),
    y = n(232386),
    N = n(10198);
function E(e, t, n) {
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
class I extends (r = d.ZP.Store) {
    initialize() {
        this.waitFor(v.Z, j.Z);
    }
    getTemplate() {
        let e = v.Z.getProps().guild;
        if (null == e) return null;
        let t = j.Z.getForGuild(e.id);
        return null != t && t.state !== O.Rj.RESOLVING ? t : null;
    }
    showNotice() {
        let e = this.getTemplate();
        return (
            null != e && null != this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description)
        );
    }
    constructor(...e) {
        super(...e),
            E(this, "name", ""),
            E(this, "description", ""),
            E(this, "error", null),
            E(this, "reset", () => {
                let e = this.getTemplate();
                if (null != e) {
                    var t, n;
                    (this.name = null != (t = e.name) ? t : this.name),
                        (this.description = null != (n = e.description) ? n : this.description);
                } else (this.name = ""), (this.description = "");
                this.emitChange();
            }),
            E(this, "setName", (e) => {
                (this.name = e), this.emitChange();
            }),
            E(this, "setDescription", (e) => {
                (this.description = e), this.emitChange();
            }),
            E(this, "setError", (e) => {
                (this.error = e), this.emitChange();
            }),
            E(this, "save", async () => {
                await x.Z.updateGuildTemplate(
                    v.Z.getProps().guild.id,
                    this.getTemplate().code,
                    this.name,
                    this.description,
                ),
                    this.emitChange();
            });
    }
}
E(I, "displayName", "GuildSettingsTemplateMetadataStore_");
let S = new I(f.Z);
function T() {
    let [e, t] = l.useState(!1),
        n = async () => {
            t(!0), await S.save(), t(!1);
        };
    return (0, i.jsx)(g.Z, {
        submitting: e,
        onReset: S.reset,
        onSave: n,
        disabled: !P(S.name),
    });
}
function P(e) {
    return null != e && e.trim().length >= 2;
}
function w() {
    return (0, i.jsx)("div", {
        className: N.marginBottom4,
        children: (0, i.jsxs)(p.y5t, {
            component: (0, i.jsx)(p.Heading, {
                variant: "heading-lg/semibold",
                children: C.intl.string(C.t.KUw7Ss),
            }),
            children: [
                (0, i.jsx)(p.Text, {
                    className: N.marginBottom20,
                    variant: "text-sm/normal",
                    children: C.intl.format(C.t.c0m8bK, {}),
                }),
                (0, i.jsx)(R, {}),
                (0, i.jsx)(p.izJ, { className: y.divider }),
                (0, i.jsx)(Z, {}),
            ],
        }),
    });
}
function Z() {
    let { guild: e } = v.Z.getProps();
    c()(null != e, "guild cannot be null");
    let t = (0, d.e7)([S], () => S.error),
        [n, r] = l.useState(!0),
        { loading: a, guildTemplate: s } = (function (e) {
            let [t, n] = l.useState(!0);
            return (
                l.useEffect(() => {
                    !(async function () {
                        n(!0);
                        try {
                            await x.Z.loadTemplatesForGuild(e), n(!1);
                        } catch (e) {
                            S.setError(new b.Hx(e));
                        }
                    })();
                }, [e]),
                {
                    loading: t,
                    guildTemplate: (0, d.e7)([j.Z], () => j.Z.getForGuild(e), [e]),
                }
            );
        })(e.id);
    if (
        (l.useEffect(() => {
            if (n && !a) {
                if (null != s) {
                    var e, t;
                    S.setName(null != (e = s.name) ? e : ""), S.setDescription(null != (t = s.description) ? t : "");
                }
                r(!1);
            }
        }, [n, s, a]),
        l.useEffect(
            () => () => {
                S.reset(), S.setError(null);
            },
            [],
        ),
        n)
    )
        return null != t
            ? (0, i.jsx)(p.Text, {
                  color: "text-danger",
                  variant: "text-sm/normal",
                  children: t.message,
              })
            : (0, i.jsx)(p.$jN, { className: N.marginTop40 });
    let o =
        null != t && null == t.getFirstFieldErrorMessage("name") && null == t.getFirstFieldErrorMessage("description");
    return (0, i.jsxs)(p.Kqy, {
        gap: 20,
        children: [
            (0, i.jsx)(A, {}),
            (0, i.jsx)(L, {
                guild: e,
                guildTemplate: s,
            }),
            o
                ? (0, i.jsx)(p.Text, {
                      className: N.marginTop8,
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: t.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
function R() {
    return (0, i.jsxs)("div", {
        className: y.descriptionBox,
        children: [
            (0, i.jsxs)("div", {
                className: y.descriptionSection,
                children: [
                    (0, i.jsx)(p.Heading, {
                        variant: "eyebrow",
                        children: C.intl.string(C.t["f8u+VO"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: y.descriptionRow,
                        children: [
                            (0, i.jsx)(p.owK, {
                                size: "md",
                                className: y.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            C.intl.string(C.t.K2tn16),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: y.descriptionRow,
                        children: [
                            (0, i.jsx)(p.owK, {
                                size: "md",
                                className: y.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            C.intl.string(C.t.om5gNq),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: y.descriptionRow,
                        children: [
                            (0, i.jsx)(p.owK, {
                                size: "md",
                                className: y.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            C.intl.string(C.t["/VNqdD"]),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: y.descriptionSection,
                children: [
                    (0, i.jsx)(p.Heading, {
                        variant: "eyebrow",
                        children: C.intl.string(C.t["8zhJEr"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: y.descriptionRow,
                        children: [
                            (0, i.jsx)(p.k$p, {
                                size: "md",
                                className: y.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            C.intl.string(C.t.WOKI6t),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: y.descriptionRow,
                        children: [
                            (0, i.jsx)(p.k$p, {
                                size: "md",
                                className: y.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            C.intl.string(C.t.ddhDJH),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: y.descriptionRow,
                        children: [
                            (0, i.jsx)(p.k$p, {
                                size: "md",
                                className: y.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            C.intl.string(C.t["6Q/DHk"]),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function D(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(p.sYh, {
        dismissable: !0,
        header: C.intl.string(C.t["cN/RFD"]),
        confirmText: C.intl.string(C.t["cN/RFD"]),
        cancelText: C.intl.string(C.t["ETE/oC"]),
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(p.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: C.intl.string(C.t["apCQv/"]),
        }),
    });
}
function A() {
    let e = (0, d.e7)([S], () => S.name),
        t = (0, d.e7)([S], () => S.description),
        n = (0, d.e7)([S], () => S.error),
        [r, a] = l.useState(!1),
        s = l.useCallback(() => {
            a(!1);
        }, []),
        o = l.useCallback(() => {
            a(!0);
        }, []),
        c = l.useMemo(() => {
            if (!(r || e.length < 1 || P(e))) return C.intl.string(C.t.IHAlh1);
        }, [e, r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.oil, {
                label: C.intl.string(C.t.z1a9R1),
                required: !0,
                error: null != c ? c : null == n ? void 0 : n.getFirstFieldErrorMessage("name"),
                value: e,
                onChange: (e) => S.setName(e),
                placeholder: C.intl.string(C.t.bMlpvk),
                maxLength: 100,
                onBlur: s,
                onFocus: o,
                autoFocus: !0,
            }),
            (0, i.jsx)(p.Kx8, {
                label: C.intl.string(C.t.GxirWa),
                error: null == n ? void 0 : n.getFirstFieldErrorMessage("description"),
                value: t,
                onChange: (e) => S.setDescription(e),
                placeholder: C.intl.string(C.t.n1FBXh),
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
                  (0, i.jsx)(p.gNt, {
                      label: C.intl.string(C.t.zGGcLw),
                      children: (0, i.jsx)(h.Z, {
                          buttonLook: m.zx.Looks.FILLED,
                          buttonColor: m.zx.Colors.BRAND,
                          value: (0, _.Z)(n.code),
                      }),
                  }),
                  n.isDirty &&
                      (0, i.jsx)(p.Text, {
                          color: "text-feedback-warning",
                          className: N.marginTop8,
                          variant: "text-sm/normal",
                          children: C.intl.string(C.t.aWsjtD),
                      }),
                  (0, i.jsxs)("div", {
                      className: s()(N.marginTop20, y.buttonContainer),
                      children: [
                          n.isDirty &&
                              (0, i.jsx)(G, {
                                  guild: t,
                                  guildTemplate: n,
                              }),
                          (0, i.jsxs)("div", {
                              className: y.rightButtonContainer,
                              children: [
                                  (0, i.jsx)(M, {
                                      guild: t,
                                      guildTemplate: n,
                                  }),
                                  (0, i.jsx)(U, { guildTemplate: n }),
                              ],
                          }),
                      ],
                  }),
                  n.isDirty &&
                      (0, i.jsx)("div", {
                          className: y.lastSync,
                          children: C.intl.format(C.t.v0AVum, { timestamp: new Date(n.updatedAt) }),
                      }),
              ],
          });
}
function k(e) {
    let { guild: t } = e,
        n = (0, d.e7)([S], () => S.name),
        [r, a] = l.useState(!1),
        s = async () => {
            S.setError(null), a(!0);
            try {
                await x.Z.createGuildTemplate(t.id, S.name, S.description);
            } catch (e) {
                S.setError(new b.Hx(e));
            }
            a(!1);
        };
    return (0, i.jsx)(p.Button, {
        variant: "primary",
        text: C.intl.string(C.t.Wxdi8A),
        loading: r,
        disabled: !P(n),
        onClick: s,
    });
}
function G(e) {
    let { guild: t, guildTemplate: n } = e,
        [r, a] = l.useState(!1),
        s = async () => {
            S.setError(null), a(!0);
            try {
                await x.Z.syncGuildTemplate(t.id, n.code);
            } catch (e) {
                S.setError(new b.Hx(e));
            }
            a(!1);
        };
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: y.button,
        children: (0, i.jsx)(p.Button, {
            variant: "primary",
            text: C.intl.string(C.t["Nw+0Y/"]),
            loading: r,
            onClick: s,
        }),
    });
}
function M(e) {
    let { guild: t, guildTemplate: n } = e,
        [r, a] = l.useState(!1),
        s = async () => {
            S.setError(null);
            try {
                await x.Z.deleteGuildTemplate(t.id, n.code), S.setName(""), S.setDescription("");
            } catch (e) {
                S.setError(new b.Hx(e));
            }
            a(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: y.button,
                children: (0, i.jsx)(p.Button, {
                    variant: "critical-secondary",
                    text: C.intl.string(C.t["cN/RFD"]),
                    onClick: () => a(!0),
                }),
            }),
            r
                ? (0, i.jsx)(D, {
                      confirm: s,
                      cancel: () => a(!1),
                  })
                : null,
        ],
    });
}
function U(e) {
    let { guildTemplate: t } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: y.button,
        children: (0, i.jsx)(p.Button, {
            variant: "secondary",
            text: C.intl.string(C.t.YI3iV6),
            onClick: () =>
                (0, p.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("10778"), n.e("10570")]).then(n.bind(n, 766775));
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
                                            E(e, t, n[t]);
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
