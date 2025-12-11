n.d(t, {
    Q5: () => T,
    Sf: () => _,
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
    f = n(481060),
    p = n(570140),
    b = n(484614),
    h = n(881052),
    x = n(751189),
    j = n(409059),
    v = n(518936),
    O = n(999382),
    C = n(260539),
    y = n(388032),
    N = n(865062),
    E = n(478411);
function I(e, t, n) {
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
class S extends (r = d.ZP.Store) {
    initialize() {
        this.waitFor(O.Z, j.Z);
    }
    getTemplate() {
        let e = O.Z.getProps().guild;
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
            I(this, "name", ""),
            I(this, "description", ""),
            I(this, "error", null),
            I(this, "reset", () => {
                let e = this.getTemplate();
                if (null != e) {
                    var t, n;
                    (this.name = null != (t = e.name) ? t : this.name),
                        (this.description = null != (n = e.description) ? n : this.description);
                } else (this.name = ""), (this.description = "");
                this.emitChange();
            }),
            I(this, "setName", (e) => {
                (this.name = e), this.emitChange();
            }),
            I(this, "setDescription", (e) => {
                (this.description = e), this.emitChange();
            }),
            I(this, "setError", (e) => {
                (this.error = e), this.emitChange();
            }),
            I(this, "save", async () => {
                await x.Z.updateGuildTemplate(
                    O.Z.getProps().guild.id,
                    this.getTemplate().code,
                    this.name,
                    this.description,
                ),
                    this.emitChange();
            });
    }
}
I(S, "displayName", "GuildSettingsTemplateMetadataStore_");
let _ = new S(p.Z);
function T() {
    let [e, t] = l.useState(!1),
        n = async () => {
            t(!0), await _.save(), t(!1);
        };
    return (0, i.jsx)(g.Z, {
        submitting: e,
        onReset: _.reset,
        onSave: n,
        disabled: !P(_.name),
    });
}
function P(e) {
    return null != e && e.trim().length >= 2;
}
function w() {
    return (0, i.jsx)("div", {
        className: E.marginBottom4,
        children: (0, i.jsxs)(f.y5t, {
            component: (0, i.jsx)(f.Heading, {
                variant: "heading-lg/semibold",
                children: y.intl.string(y.t.KUw7Ss),
            }),
            children: [
                (0, i.jsx)(f.Text, {
                    className: E.marginBottom20,
                    variant: "text-sm/normal",
                    children: y.intl.format(y.t.c0m8bK, {}),
                }),
                (0, i.jsx)(R, {}),
                (0, i.jsx)(f.izJ, { className: N.divider }),
                (0, i.jsx)(Z, {}),
            ],
        }),
    });
}
function Z() {
    let { guild: e } = O.Z.getProps();
    c()(null != e, "guild cannot be null");
    let t = (0, d.e7)([_], () => _.error),
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
                            _.setError(new h.Hx(e));
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
                    _.setName(null != (e = s.name) ? e : ""), _.setDescription(null != (t = s.description) ? t : "");
                }
                r(!1);
            }
        }, [n, s, a]),
        l.useEffect(
            () => () => {
                _.reset(), _.setError(null);
            },
            [],
        ),
        n)
    )
        return null != t
            ? (0, i.jsx)(f.Text, {
                  color: "text-feedback-critical",
                  variant: "text-sm/normal",
                  children: t.message,
              })
            : (0, i.jsx)(f.$jN, { className: E.marginTop40 });
    let o =
        null != t && null == t.getFirstFieldErrorMessage("name") && null == t.getFirstFieldErrorMessage("description");
    return (0, i.jsxs)(f.Kqy, {
        gap: 20,
        children: [
            (0, i.jsx)(A, {}),
            (0, i.jsx)(L, {
                guild: e,
                guildTemplate: s,
            }),
            o
                ? (0, i.jsx)(f.Text, {
                      className: E.marginTop8,
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
        className: N.descriptionBox,
        children: [
            (0, i.jsxs)("div", {
                className: N.descriptionSection,
                children: [
                    (0, i.jsx)(f.Heading, {
                        variant: "eyebrow",
                        children: y.intl.string(y.t["f8u+VO"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: N.descriptionRow,
                        children: [
                            (0, i.jsx)(f.owK, {
                                size: "md",
                                className: N.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            y.intl.string(y.t.K2tn16),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: N.descriptionRow,
                        children: [
                            (0, i.jsx)(f.owK, {
                                size: "md",
                                className: N.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            y.intl.string(y.t.om5gNq),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: N.descriptionRow,
                        children: [
                            (0, i.jsx)(f.owK, {
                                size: "md",
                                className: N.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            y.intl.string(y.t["/VNqdD"]),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: N.descriptionSection,
                children: [
                    (0, i.jsx)(f.Heading, {
                        variant: "eyebrow",
                        children: y.intl.string(y.t["8zhJEr"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: N.descriptionRow,
                        children: [
                            (0, i.jsx)(f.k$p, {
                                size: "md",
                                className: N.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            y.intl.string(y.t.WOKI6t),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: N.descriptionRow,
                        children: [
                            (0, i.jsx)(f.k$p, {
                                size: "md",
                                className: N.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            y.intl.string(y.t.ddhDJH),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: N.descriptionRow,
                        children: [
                            (0, i.jsx)(f.k$p, {
                                size: "md",
                                className: N.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css,
                            }),
                            y.intl.string(y.t["6Q/DHk"]),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function D(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(f.SR, {
        dismissable: !0,
        header: y.intl.string(y.t["cN/RFD"]),
        confirmText: y.intl.string(y.t["cN/RFD"]),
        cancelText: y.intl.string(y.t["ETE/oC"]),
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(f.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: y.intl.string(y.t["apCQv/"]),
        }),
    });
}
function A() {
    let e = (0, d.e7)([_], () => _.name),
        t = (0, d.e7)([_], () => _.description),
        n = (0, d.e7)([_], () => _.error),
        [r, a] = l.useState(!1),
        s = l.useCallback(() => {
            a(!1);
        }, []),
        o = l.useCallback(() => {
            a(!0);
        }, []),
        c = l.useMemo(() => {
            if (!(r || e.length < 1 || P(e))) return y.intl.string(y.t.IHAlh1);
        }, [e, r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.oil, {
                label: y.intl.string(y.t.z1a9R1),
                required: !0,
                error: null != c ? c : null == n ? void 0 : n.getFirstFieldErrorMessage("name"),
                value: e,
                onChange: (e) => _.setName(e),
                placeholder: y.intl.string(y.t.bMlpvk),
                maxLength: 100,
                onBlur: s,
                onFocus: o,
                autoFocus: !0,
            }),
            (0, i.jsx)(f.Kx8, {
                label: y.intl.string(y.t.GxirWa),
                error: null == n ? void 0 : n.getFirstFieldErrorMessage("description"),
                value: t,
                onChange: (e) => _.setDescription(e),
                placeholder: y.intl.string(y.t.n1FBXh),
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
                  (0, i.jsx)(f.gNt, {
                      label: y.intl.string(y.t.zGGcLw),
                      children: (0, i.jsx)(b.Z, {
                          buttonLook: m.zx.Looks.FILLED,
                          buttonColor: m.zx.Colors.BRAND,
                          value: (0, v.Z)(n.code),
                      }),
                  }),
                  n.isDirty &&
                      (0, i.jsx)(f.Text, {
                          color: "text-feedback-warning",
                          className: E.marginTop8,
                          variant: "text-sm/normal",
                          children: y.intl.string(y.t.aWsjtD),
                      }),
                  (0, i.jsxs)("div", {
                      className: s()(E.marginTop20, N.buttonContainer),
                      children: [
                          n.isDirty &&
                              (0, i.jsx)(G, {
                                  guild: t,
                                  guildTemplate: n,
                              }),
                          (0, i.jsxs)("div", {
                              className: N.rightButtonContainer,
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
                          className: N.lastSync,
                          children: y.intl.format(y.t.v0AVum, { timestamp: new Date(n.updatedAt) }),
                      }),
              ],
          });
}
function k(e) {
    let { guild: t } = e,
        n = (0, d.e7)([_], () => _.name),
        [r, a] = l.useState(!1),
        s = async () => {
            _.setError(null), a(!0);
            try {
                await x.Z.createGuildTemplate(t.id, _.name, _.description);
            } catch (e) {
                _.setError(new h.Hx(e));
            }
            a(!1);
        };
    return (0, i.jsx)(f.Button, {
        variant: "primary",
        text: y.intl.string(y.t.Wxdi8A),
        loading: r,
        disabled: !P(n),
        onClick: s,
    });
}
function G(e) {
    let { guild: t, guildTemplate: n } = e,
        [r, a] = l.useState(!1),
        s = async () => {
            _.setError(null), a(!0);
            try {
                await x.Z.syncGuildTemplate(t.id, n.code);
            } catch (e) {
                _.setError(new h.Hx(e));
            }
            a(!1);
        };
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: N.button,
        children: (0, i.jsx)(f.Button, {
            variant: "primary",
            text: y.intl.string(y.t["Nw+0Y/"]),
            loading: r,
            onClick: s,
        }),
    });
}
function M(e) {
    let { guild: t, guildTemplate: n } = e,
        [r, a] = l.useState(!1),
        s = async () => {
            _.setError(null);
            try {
                await x.Z.deleteGuildTemplate(t.id, n.code), _.setName(""), _.setDescription("");
            } catch (e) {
                _.setError(new h.Hx(e));
            }
            a(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: N.button,
                children: (0, i.jsx)(f.Button, {
                    variant: "critical-secondary",
                    text: y.intl.string(y.t["cN/RFD"]),
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
        className: N.button,
        children: (0, i.jsx)(f.Button, {
            variant: "secondary",
            text: y.intl.string(y.t.YI3iV6),
            onClick: () =>
                (0, f.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("10778"), n.e("93099")]).then(n.bind(n, 766775));
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
                                            I(e, t, n[t]);
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
