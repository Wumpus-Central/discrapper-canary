(n.d(t, { Z: () => L }), n(388685), n(413496), n(433524), n(35282), n(539854), n(642613), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(239091),
    u = n(749210),
    m = n(493544),
    g = n(479531),
    p = n(210887),
    f = n(246946),
    h = n(594174),
    x = n(251625),
    b = n(226951),
    j = n(51144),
    v = n(434404),
    _ = n(372454),
    O = n(999382),
    y = n(84613),
    C = n(740903),
    N = n(1080),
    I = n(981631),
    E = n(388032),
    S = n(69214),
    T = n(588866);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            }));
    }
    return e;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e) {
    let { transitionState: t, guild: n, user: l, ban: s, hideDiscriminator: a, onClose: o } = e,
        [d, m] = i.useState(!1),
        [p, f] = i.useState(null);
    async function h() {
        if (null != n) {
            (f(null), m(!0));
            try {
                (await u.Z.unbanUser(n.id, l.id), o());
            } catch (e) {
                (f(new g.Z(e)), m(!1));
            }
        }
    }
    return (0, r.jsxs)(c.Y0X, {
        className: S.bannedUserModal,
        transitionState: t,
        parentComponent: 'GuildSettingsBans',
        children: [
            (0, r.jsxs)(c.xBx, {
                className: S.header,
                separator: !1,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-xl/semibold',
                        className: S.userUsername,
                        children: j.ZP.getUserTag(l, {
                            mode: 'username',
                            identifiable: a ? 'never' : 'always'
                        })
                    }),
                    a || l.isPomelo()
                        ? null
                        : (0, r.jsxs)(c.X6q, {
                              variant: 'heading-xl/semibold',
                              className: S.userDiscrim,
                              children: ['#', l.discriminator]
                          })
                ]
            }),
            (0, r.jsxs)(c.hzk, {
                className: S.content,
                children: [
                    (0, r.jsx)(c.Text, {
                        className: S.reasonHeader,
                        variant: 'text-xs/normal',
                        children: E.intl.string(E.t['9Ki66O'])
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        children: null != s.reason && '' !== s.reason ? s.reason : E.intl.string(E.t['t+2Zcn'])
                    }),
                    null != p
                        ? (0, r.jsx)(c.Text, {
                              className: S.error,
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              children: p.getAnyErrorMessage()
                          })
                        : null
                ]
            }),
            (0, r.jsx)(c.mzw, {
                className: S.footer,
                children: (0, r.jsxs)(c.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, r.jsx)(c.zxk, {
                            variant: 'critical-secondary',
                            text: E.intl.string(E.t.UPcIa2),
                            onClick: h,
                            loading: d
                        }),
                        (0, r.jsx)(c.zxk, {
                            variant: 'primary',
                            text: E.intl.string(E.t.i4jeWV),
                            onClick: o
                        })
                    ]
                })
            })
        ]
    });
}
class D extends i.PureComponent {
    render() {
        let { user: e, hideDiscriminator: t, guild: n } = this.props;
        return (0, r.jsxs)(c.P3F, {
            className: s()(S.bannedUser, T.card),
            onClick: this.handleShowModal,
            onContextMenu: this.handleContextMenu,
            children: [
                (0, r.jsx)(c.qEK, {
                    src: e.getAvatarURL(null == n ? void 0 : n.id, 40),
                    'aria-label': e.username,
                    size: c.EFr.SIZE_40,
                    className: S.bannedUserAvatar
                }),
                (0, r.jsxs)('div', {
                    className: S.username,
                    children: [
                        j.ZP.getUserTag(e, {
                            mode: 'username',
                            identifiable: t ? 'never' : 'always'
                        }),
                        !t &&
                            !e.isPomelo() &&
                            (0, r.jsxs)('span', {
                                className: S.discrim,
                                children: ['#', e.discriminator]
                            })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            P(this, 'handleShowModal', () => {
                let { guild: e, user: t, hideDiscriminator: n, ban: i } = this.props;
                (0, c.h7j)((l) =>
                    (0, r.jsx)(
                        Z,
                        R(w({}, l), {
                            guild: e,
                            user: t,
                            ban: i,
                            hideDiscriminator: n
                        })
                    )
                );
            }),
            P(this, 'handleContextMenu', (e) => {
                (0, d.jW)(e, async () => {
                    let { default: e } = await n.e('23835').then(n.bind(n, 768079));
                    return (t) => (0, r.jsx)(e, R(w({}, t), { user: this.props.user }));
                });
            }));
    }
}
class A extends i.PureComponent {
    makeFilter(e) {
        if (null == e || 0 === e.length) return (e) => null != e;
        {
            let t = RegExp('^'.concat(b.Z.escape(e)), 'i');
            return (n) => null != n && (n.id === e || t.test(n.username));
        }
    }
    render() {
        let { bans: e, guild: t, searchQuery: n } = this.props;
        if (null == t) return null;
        let i = this.getSortedBans(e, n);
        return (0, r.jsx)(m.Xi, {
            sections: [Math.max(1, i.length)],
            sectionHeight: this.getSectionHeight,
            renderSection: this.renderSection,
            rowHeight: this.getRowHeight,
            renderRow: this.renderRow
        });
    }
    handleModerationClick() {
        (v.Z.setSection(I.pNK.SAFETY), (0, y.K)(C.u.DM_AND_SPAM_PROTECTION));
    }
    handleQueryChange(e) {
        v.Z.setSearchQuery(e);
    }
    handleQueryClear() {
        v.Z.setSearchQuery('');
    }
    constructor(...e) {
        (super(...e),
            P(
                this,
                'getSortedBans',
                (0, x.oH)((e, t) => {
                    if (null == e) return [];
                    let n = this.makeFilter(t),
                        r = [];
                    for (let t of e.keys()) {
                        let e = h.default.getUser(t);
                        null != e && n(e) && r.push(e);
                    }
                    return r.sort((e, t) => e.username.localeCompare(t.username));
                })
            ),
            P(this, 'getRowHeight', (e, t) => {
                var n;
                if (e > 0) return 0;
                let { bans: r, searchQuery: i } = this.props,
                    l = this.getSortedBans(r, i);
                if (0 === l.length && 1 === t) return 56;
                let s = l[t],
                    a = null == r ? void 0 : r.get(null != (n = null == s ? void 0 : s.id) ? n : '');
                return 56 * (null != s && null != a);
            }),
            P(this, 'renderRow', (e) => {
                var t;
                let { section: n, row: i } = e,
                    { bans: l, streamerMode: s, guild: a, searchQuery: o } = this.props;
                if (n > 0) return null;
                if (null == l && 0 === i)
                    return (0, r.jsx)(
                        c.$jN,
                        {
                            className: S.spinner,
                            type: c.$jN.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let d = this.getSortedBans(l, o)[i],
                    u = null == l ? void 0 : l.get(null != (t = null == d ? void 0 : d.id) ? t : '');
                if (null != d && null != u)
                    return (0, r.jsx)(
                        D,
                        {
                            user: d,
                            ban: u,
                            hideDiscriminator: s,
                            guild: a
                        },
                        d.id
                    );
            }),
            P(this, 'getSectionHeight', (e) => {
                if (e > 0) return 0;
                let { bans: t } = this.props;
                return null == t ? 462 : 120;
            }),
            P(this, 'renderSection', () => {
                var e;
                let t,
                    { bans: i, theme: l, searchQuery: s } = this.props;
                null == i
                    ? (t = null)
                    : (null == i ? void 0 : i.size) === 0 &&
                      (t = (0, r.jsxs)(c.ubH, {
                          theme: l,
                          className: S.emptyState,
                          children: [
                              (0, r.jsx)(c.oxh, {
                                  darkSrc: n(532747),
                                  lightSrc: n(433466),
                                  width: 256,
                                  height: 212
                              }),
                              (0, r.jsx)(c.OZU, {
                                  note: E.intl.string(E.t.zfCsAw),
                                  style: { maxWidth: 300 },
                                  children: E.intl.string(E.t.ZEiY1N)
                              })
                          ]
                      }));
                let a = null != (e = null == i ? void 0 : i.size) ? e : 0;
                return (0, r.jsxs)(
                    c.hjN,
                    {
                        tag: c.RB0.H1,
                        title: E.intl.formatToPlainString(E.t['bW+JJy'], { bans: a }),
                        children: [
                            (0, r.jsxs)('div', {
                                className: S.settingsHeader,
                                children: [
                                    (0, r.jsx)(c.R94, {
                                        type: c.geA.DESCRIPTION,
                                        className: S.description,
                                        children: E.intl.format(E.t.JcZ36u, { onModerationClick: this.handleModerationClick })
                                    }),
                                    null == t &&
                                        (0, r.jsx)(c.E1j, {
                                            className: S.searchBar,
                                            query: null != s ? s : '',
                                            placeholder: E.intl.string(E.t.rTL1RE),
                                            'aria-label': E.intl.string(E.t.rTL1RE),
                                            onChange: this.handleQueryChange,
                                            onClear: this.handleQueryClear
                                        })
                                ]
                            }),
                            (0, r.jsx)(c.$i$, { style: { marginBottom: -1 } }),
                            t
                        ]
                    },
                    'bans-header'
                );
            }));
    }
}
let k = o.ZP.connectStores([O.Z, p.Z, f.Z], () => {
    let { bans: e, guild: t, searchQuery: n } = O.Z.getProps();
    return {
        searchQuery: null != n ? n : '',
        bans: e,
        guild: t,
        theme: p.Z.theme,
        streamerMode: f.Z.hidePersonalInformation
    };
})(A);
function L() {
    var e;
    let { guild: t } = (0, o.e7)([O.Z], () => O.Z.getProps(), [], a.isEqual),
        { enabled: n } = _.T.useExperiment(
            {
                guildId: null != (e = null == t ? void 0 : t.id) ? e : I.lds,
                location: '4d6318_1'
            },
            { autoTrackExposure: !0 }
        );
    return n ? (0, r.jsx)(N.Z, {}) : (0, r.jsx)(k, {});
}
