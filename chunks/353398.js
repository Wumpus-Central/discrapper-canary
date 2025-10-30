n.d(t, {
    Q5: () => T,
    Sf: () => S,
    ZP: () => w,
}),
    n(781311),
    n(953529),
    n(388685);
var r,
    i = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    c = n.n(o),
    d = n(442837),
    u = n(692547),
    g = n(755721),
    m = n(481060),
    p = n(570140),
    f = n(484614),
    h = n(852860),
    b = n(881052),
    x = n(751189),
    j = n(409059),
    v = n(518936),
    _ = n(999382),
    C = n(260539),
    O = n(388032),
    y = n(232386),
    E = n(10198);
function N(e, t, n) {
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
        this.waitFor(_.Z, j.Z);
    }
    getTemplate() {
        let e = _.Z.getProps().guild;
        if (null == e) return null;
        let t = j.Z.getForGuild(e.id);
        return null != t && t.state !== C.Rj.RESOLVING ? t : null;
    }
    showNotice() {
        let e = this.getTemplate();
        return (
            null != e && null != this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description)
        );
    }
    constructor(...e) {
        super(...e),
            N(this, "name", ""),
            N(this, "description", ""),
            N(this, "error", null),
            N(this, "reset", () => {
                let e = this.getTemplate();
                if (null != e) {
                    var t, n;
                    (this.name = null != (t = e.name) ? t : this.name),
                        (this.description = null != (n = e.description) ? n : this.description);
                } else (this.name = ""), (this.description = "");
                this.emitChange();
            }),
            N(this, "setName", (e) => {
                (this.name = e), this.emitChange();
            }),
            N(this, "setDescription", (e) => {
                (this.description = e), this.emitChange();
            }),
            N(this, "setError", (e) => {
                (this.error = e), this.emitChange();
            }),
            N(this, "save", async () => {
                await x.Z.updateGuildTemplate(
                    _.Z.getProps().guild.id,
                    this.getTemplate().code,
                    this.name,
                    this.description,
                ),
                    this.emitChange();
            });
    }
}
N(I, "displayName", "GuildSettingsTemplateMetadataStore_");
let S = new I(p.Z);
function T() {
    let [e, t] = l.useState(!1),
        n = async () => {
            t(!0), await S.save(), t(!1);
        };
    return (0, i.jsx)(h.Z, {
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
        className: E.marginBottom4,
        children: (0, i.jsxs)(m.y5t, {
            component: (0, i.jsx)(m.Heading, {
                variant: "heading-lg/semibold",
                children: O.intl.string(O.t.KUw7Ss),
            }),
            children: [
                (0, i.jsx)(m.Text, {
                    className: E.marginBottom20,
                    variant: "text-sm/normal",
                    children: O.intl.format(O.t.c0m8bK, {}),
                }),
                (0, i.jsx)(R, {}),
                (0, i.jsx)(m.izJ, { className: y.divider }),
                (0, i.jsx)(Z, {}),
            ],
        }),
    });
}
function Z() {
    let { guild: e } = _.Z.getProps();
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
            ? (0, i.jsx)(m.Text, {
                  color: "text-danger",
                  variant: "text-sm/normal",
                  children: t.message,
              })
            : (0, i.jsx)(m.$jN, { className: E.marginTop40 });
    let o =
        null != t && null == t.getFirstFieldErrorMessage("name") && null == t.getFirstFieldErrorMessage("description");
    return (0, i.jsxs)(m.Kqy, {
        gap: 20,
        children: [
            (0, i.jsx)(A, {}),
            (0, i.jsx)(L, {
                guild: e,
                guildTemplate: s,
            }),
            o
                ? (0, i.jsx)(m.Text, {
                      className: E.marginTop8,
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
                    (0, i.jsx)(m.Heading, {
                        variant: "eyebrow",
                        children: O.intl.string(O.t["f8u+VO"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: y.descriptionRow,
                        children: [
                            (0, i.jsx)(m.owK, {
                                size: "md",
                                className: y.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            O.intl.string(O.t.K2tn16),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: y.descriptionRow,
                        children: [
                            (0, i.jsx)(m.owK, {
                                size: "md",
                                className: y.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            O.intl.string(O.t.om5gNq),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: y.descriptionRow,
                        children: [
                            (0, i.jsx)(m.owK, {
                                size: "md",
                                className: y.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            O.intl.string(O.t["/VNqdD"]),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: y.descriptionSection,
                children: [
                    (0, i.jsx)(m.Heading, {
                        variant: "eyebrow",
                        children: O.intl.string(O.t["8zhJEr"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: y.descriptionRow,
                        children: [
                            (0, i.jsx)(m.k$p, {
                                size: "md",
                                className: y.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            O.intl.string(O.t.WOKI6t),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: y.descriptionRow,
                        children: [
                            (0, i.jsx)(m.k$p, {
                                size: "md",
                                className: y.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            O.intl.string(O.t.ddhDJH),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: y.descriptionRow,
                        children: [
                            (0, i.jsx)(m.k$p, {
                                size: "md",
                                className: y.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            O.intl.string(O.t["6Q/DHk"]),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function D(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(m.sYh, {
        dismissable: !0,
        header: O.intl.string(O.t["cN/RFD"]),
        confirmText: O.intl.string(O.t["cN/RFD"]),
        cancelText: O.intl.string(O.t["ETE/oC"]),
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(m.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: O.intl.string(O.t["apCQv/"]),
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
            if (!(r || e.length < 1 || P(e))) return O.intl.string(O.t.IHAlh1);
        }, [e, r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.oil, {
                label: O.intl.string(O.t.z1a9R1),
                required: !0,
                error: null != c ? c : null == n ? void 0 : n.getFirstFieldErrorMessage("name"),
                value: e,
                onChange: (e) => S.setName(e),
                placeholder: O.intl.string(O.t.bMlpvk),
                maxLength: 100,
                onBlur: s,
                onFocus: o,
                autoFocus: !0,
            }),
            (0, i.jsx)(m.Kx8, {
                label: O.intl.string(O.t.GxirWa),
                error: null == n ? void 0 : n.getFirstFieldErrorMessage("description"),
                value: t,
                onChange: (e) => S.setDescription(e),
                placeholder: O.intl.string(O.t.n1FBXh),
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
                  (0, i.jsx)(m.gNt, {
                      label: O.intl.string(O.t.zGGcLw),
                      children: (0, i.jsx)(f.Z, {
                          buttonLook: g.zx.Looks.FILLED,
                          buttonColor: g.zx.Colors.BRAND,
                          value: (0, v.Z)(n.code),
                      }),
                  }),
                  n.isDirty &&
                      (0, i.jsx)(m.Text, {
                          color: "text-feedback-warning",
                          className: E.marginTop8,
                          variant: "text-sm/normal",
                          children: O.intl.string(O.t.aWsjtD),
                      }),
                  (0, i.jsxs)("div", {
                      className: s()(E.marginTop20, y.buttonContainer),
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
                          children: O.intl.format(O.t.v0AVum, { timestamp: new Date(n.updatedAt) }),
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
    return (0, i.jsx)(m.Button, {
        variant: "primary",
        text: O.intl.string(O.t.Wxdi8A),
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
        children: (0, i.jsx)(m.Button, {
            variant: "primary",
            text: O.intl.string(O.t["Nw+0Y/"]),
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
                children: (0, i.jsx)(m.Button, {
                    variant: "critical-secondary",
                    text: O.intl.string(O.t["cN/RFD"]),
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
        children: (0, i.jsx)(m.Button, {
            variant: "secondary",
            text: O.intl.string(O.t.YI3iV6),
            onClick: () =>
                (0, m.ZDy)(async () => {
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
                                            N(e, t, n[t]);
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
