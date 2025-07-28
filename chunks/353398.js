(n.d(t, {
    Q5: () => T,
    Sf: () => S,
    ZP: () => w
}),
    n(781311),
    n(953529),
    n(388685));
var r,
    i = n(255367),
    l = n(73800),
    s = n(120356),
    a = n.n(s),
    o = n(512722),
    c = n.n(o),
    d = n(442837),
    u = n(692547),
    m = n(755721),
    g = n(481060),
    p = n(570140),
    f = n(484614),
    h = n(852860),
    x = n(881052),
    b = n(751189),
    j = n(409059),
    v = n(518936),
    _ = n(999382),
    O = n(260539),
    y = n(388032),
    C = n(651412),
    N = n(20493);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class E extends (r = d.ZP.Store) {
    getTemplate() {
        let e = _.Z.getProps().guild;
        if (null == e) return null;
        let t = j.Z.getForGuild(e.id);
        return null != t && t.state !== O.Rj.RESOLVING ? t : null;
    }
    showNotice() {
        let e = this.getTemplate();
        return null != e && null != this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description);
    }
    constructor(...e) {
        (super(...e),
            I(this, 'name', ''),
            I(this, 'description', ''),
            I(this, 'error', null),
            I(this, 'reset', () => {
                let e = this.getTemplate();
                if (null != e) {
                    var t, n;
                    ((this.name = null != (t = e.name) ? t : this.name), (this.description = null != (n = e.description) ? n : this.description));
                } else ((this.name = ''), (this.description = ''));
                this.emitChange();
            }),
            I(this, 'setName', (e) => {
                ((this.name = e), this.emitChange());
            }),
            I(this, 'setDescription', (e) => {
                ((this.description = e), this.emitChange());
            }),
            I(this, 'setError', (e) => {
                ((this.error = e), this.emitChange());
            }),
            I(this, 'save', async () => {
                (await b.Z.updateGuildTemplate(_.Z.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange());
            }));
    }
}
I(E, 'displayName', 'GuildSettingsTemplateMetadataStore_');
let S = new E(p.Z);
function T() {
    let [e, t] = l.useState(!1),
        n = async () => {
            (t(!0), await S.save(), t(!1));
        };
    return (0, i.jsx)(h.Z, {
        submitting: e,
        onReset: S.reset,
        onSave: n,
        disabled: !P(S.name)
    });
}
function P(e) {
    return null != e && e.trim().length >= 2;
}
function w() {
    return (0, i.jsx)(g.hjN, {
        className: N.marginBottom4,
        children: (0, i.jsxs)(g.y5t, {
            component: (0, i.jsx)(g.vwX, {
                tag: g.RB0.H1,
                children: y.intl.string(y.t.KUw7Sk)
            }),
            children: [
                (0, i.jsx)(g.R94, {
                    className: N.marginBottom20,
                    type: g.geA.DESCRIPTION,
                    children: y.intl.format(y.t.c0m8bG, {})
                }),
                (0, i.jsx)(Z, {}),
                (0, i.jsx)(g.$i$, { className: C.divider }),
                (0, i.jsx)(R, {})
            ]
        })
    });
}
function R() {
    let { guild: e } = _.Z.getProps();
    c()(null != e, 'guild cannot be null');
    let t = (0, d.e7)([S], () => S.error),
        [n, r] = l.useState(!0),
        { loading: s, guildTemplate: a } = (function (e) {
            let [t, n] = l.useState(!0);
            return (
                l.useEffect(() => {
                    !(async function () {
                        n(!0);
                        try {
                            (await b.Z.loadTemplatesForGuild(e), n(!1));
                        } catch (e) {
                            S.setError(new x.Hx(e));
                        }
                    })();
                }, [e]),
                {
                    loading: t,
                    guildTemplate: (0, d.e7)([j.Z], () => j.Z.getForGuild(e), [e])
                }
            );
        })(e.id);
    if (
        (l.useEffect(() => {
            if (n && !s) {
                if (null != a) {
                    var e, t;
                    (S.setName(null != (e = a.name) ? e : ''), S.setDescription(null != (t = a.description) ? t : ''));
                }
                r(!1);
            }
        }, [n, a, s]),
        l.useEffect(
            () => () => {
                (S.reset(), S.setError(null));
            },
            []
        ),
        n)
    )
        return null != t
            ? (0, i.jsx)(g.Text, {
                  color: 'text-danger',
                  variant: 'text-sm/normal',
                  children: t.message
              })
            : (0, i.jsx)(g.$jN, { className: N.marginTop40 });
    let o = null != t && null == t.getFirstFieldErrorMessage('name') && null == t.getFirstFieldErrorMessage('description');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(A, {}),
            (0, i.jsx)(k, {
                guild: e,
                guildTemplate: a
            }),
            o
                ? (0, i.jsx)(g.Text, {
                      className: N.marginTop8,
                      color: 'text-danger',
                      variant: 'text-sm/normal',
                      children: t.getAnyErrorMessage()
                  })
                : null
        ]
    });
}
function Z() {
    return (0, i.jsxs)('div', {
        className: C.descriptionBox,
        children: [
            (0, i.jsxs)('div', {
                className: C.descriptionSection,
                children: [
                    (0, i.jsx)(g.X6q, {
                        variant: 'eyebrow',
                        children: y.intl.string(y.t['f8u+VF'])
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(g.owK, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            y.intl.string(y.t.K2tn19)
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(g.owK, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            y.intl.string(y.t.om5gNj)
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(g.owK, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            y.intl.string(y.t['/VNqdH'])
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: C.descriptionSection,
                children: [
                    (0, i.jsx)(g.X6q, {
                        variant: 'eyebrow',
                        children: y.intl.string(y.t['8zhJEh'])
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(g.k$p, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            y.intl.string(y.t.WOKI6u)
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(g.k$p, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            y.intl.string(y.t.ddhDJC)
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.descriptionRow,
                        children: [
                            (0, i.jsx)(g.k$p, {
                                size: 'md',
                                className: C.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            y.intl.string(y.t['6Q/DHh'])
                        ]
                    })
                ]
            })
        ]
    });
}
function D(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(g.sYh, {
        dismissable: !0,
        header: y.intl.string(y.t['cN/RFB']),
        confirmText: y.intl.string(y.t['cN/RFB']),
        cancelText: y.intl.string(y.t['ETE/oK']),
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(g.Text, {
            variant: 'text-md/normal',
            color: 'text-default',
            children: y.intl.string(y.t.apCQv7)
        })
    });
}
function A() {
    let e = (0, d.e7)([S], () => S.name),
        t = (0, d.e7)([S], () => S.description),
        n = (0, d.e7)([S], () => S.error),
        [r, s] = l.useState(!1),
        a = l.useCallback(() => {
            s(!1);
        }, []),
        o = l.useCallback(() => {
            s(!0);
        }, []),
        c = l.useMemo(() => {
            if (!(r || e.length < 1 || P(e))) return y.intl.string(y.t.IHAlh4);
        }, [e, r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.xJW, {
                className: N.marginBottom20,
                title: y.intl.string(y.t.z1a9R0),
                required: !0,
                error: null == n ? void 0 : n.getFirstFieldErrorMessage('name'),
                children: (0, i.jsx)(g.oil, {
                    value: e,
                    onChange: (e) => S.setName(e),
                    placeholder: y.intl.string(y.t.bMlpvr),
                    maxLength: 100,
                    onBlur: a,
                    onFocus: o,
                    autoFocus: !0,
                    error: c
                })
            }),
            (0, i.jsx)(g.xJW, {
                className: N.marginBottom20,
                title: y.intl.string(y.t.GxirWV),
                error: null == n ? void 0 : n.getFirstFieldErrorMessage('description'),
                children: (0, i.jsx)(g.Kx8, {
                    value: t,
                    onChange: (e) => S.setDescription(e),
                    placeholder: y.intl.string(y.t.n1FBXl),
                    maxLength: 120
                })
            })
        ]
    });
}
function k(e) {
    let { guild: t, guildTemplate: n } = e;
    return null == n
        ? (0, i.jsx)(L, { guild: t })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(g.xJW, {
                      title: y.intl.string(y.t.zGGcLy),
                      children: (0, i.jsx)(f.Z, {
                          buttonLook: m.zx.Looks.FILLED,
                          buttonColor: m.zx.Colors.BRAND,
                          value: (0, v.Z)(n.code)
                      })
                  }),
                  n.isDirty &&
                      (0, i.jsx)(g.Text, {
                          color: 'text-feedback-warning',
                          className: N.marginTop8,
                          variant: 'text-sm/normal',
                          children: y.intl.string(y.t.aWsjtL)
                      }),
                  (0, i.jsxs)('div', {
                      className: a()(N.marginTop20, C.buttonContainer),
                      children: [
                          n.isDirty &&
                              (0, i.jsx)(M, {
                                  guild: t,
                                  guildTemplate: n
                              }),
                          (0, i.jsxs)('div', {
                              className: C.rightButtonContainer,
                              children: [
                                  (0, i.jsx)(G, {
                                      guild: t,
                                      guildTemplate: n
                                  }),
                                  (0, i.jsx)(U, { guildTemplate: n })
                              ]
                          })
                      ]
                  }),
                  n.isDirty &&
                      (0, i.jsx)('div', {
                          className: C.lastSync,
                          children: y.intl.format(y.t.v0AVur, { timestamp: new Date(n.updatedAt) })
                      })
              ]
          });
}
function L(e) {
    let { guild: t } = e,
        n = (0, d.e7)([S], () => S.name),
        [r, s] = l.useState(!1),
        a = async () => {
            (S.setError(null), s(!0));
            try {
                await b.Z.createGuildTemplate(t.id, S.name, S.description);
            } catch (e) {
                S.setError(new x.Hx(e));
            }
            s(!1);
        };
    return (0, i.jsx)(g.zxk, {
        variant: 'primary',
        text: y.intl.string(y.t.Wxdi8P),
        loading: r,
        disabled: !P(n),
        onClick: a
    });
}
function M(e) {
    let { guild: t, guildTemplate: n } = e,
        [r, s] = l.useState(!1),
        a = async () => {
            (S.setError(null), s(!0));
            try {
                await b.Z.syncGuildTemplate(t.id, n.code);
            } catch (e) {
                S.setError(new x.Hx(e));
            }
            s(!1);
        };
    return (0, i.jsx)('div', {
        'data-button-hoisted-classname-wrapper': !0,
        className: C.button,
        children: (0, i.jsx)(g.zxk, {
            variant: 'primary',
            text: y.intl.string(y.t['Nw+0Y2']),
            loading: r,
            onClick: a
        })
    });
}
function G(e) {
    let { guild: t, guildTemplate: n } = e,
        [r, s] = l.useState(!1),
        a = async () => {
            S.setError(null);
            try {
                (await b.Z.deleteGuildTemplate(t.id, n.code), S.setName(''), S.setDescription(''));
            } catch (e) {
                S.setError(new x.Hx(e));
            }
            s(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                'data-button-hoisted-classname-wrapper': !0,
                className: C.button,
                children: (0, i.jsx)(g.zxk, {
                    variant: 'critical-secondary',
                    text: y.intl.string(y.t['cN/RFB']),
                    onClick: () => s(!0)
                })
            }),
            r
                ? (0, i.jsx)(D, {
                      confirm: a,
                      cancel: () => s(!1)
                  })
                : null
        ]
    });
}
function U(e) {
    let { guildTemplate: t } = e;
    return (0, i.jsx)('div', {
        'data-button-hoisted-classname-wrapper': !0,
        className: C.button,
        children: (0, i.jsx)(g.zxk, {
            variant: 'secondary',
            text: y.intl.string(y.t.YI3iV1),
            onClick: () =>
                (0, g.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('10778'), n.e('44044')]).then(n.bind(n, 766775));
                    return (n) => {
                        var r, l;
                        return (0, i.jsx)(
                            e,
                            ((r = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            I(e, t, n[t]);
                                        }));
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
                            r)
                        );
                    };
                })
        })
    });
}
