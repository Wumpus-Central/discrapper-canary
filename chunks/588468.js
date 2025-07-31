(n.d(t, {
    DJ: () => B,
    ZP: () => eo,
    rp: () => V
}),
    n(415506),
    n(953529),
    n(388685));
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(392711),
    c = n.n(l),
    u = n(91192),
    d = n(481060),
    _ = n(607070),
    f = n(895924),
    p = n(237375),
    h = n(342687),
    m = n(933557),
    g = n(471445),
    E = n(511618),
    b = n(884902),
    y = n(887120),
    O = n(926491),
    v = n(378233),
    I = n(695346),
    T = n(430824),
    S = n(699516),
    A = n(594174),
    N = n(768581),
    C = n(51144),
    R = n(965386),
    P = n(981631),
    w = n(185923),
    D = n(388032),
    L = n(256965);
function x(e, t, n) {
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
function M(e) {
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
                x(e, t, n[t]);
            }));
    }
    return e;
}
function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = G(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function B(e) {
    return null != e ? 'autocomplete-'.concat(e) : null;
}
function V(e) {
    return 'autocomplete-'.concat(e, '-title');
}
let F = a.createContext(null);
class Z extends a.PureComponent {
    isSelectable() {
        return this.selectable;
    }
    renderContent() {
        throw Error('AutocompleteRow: renderContent must be extended');
    }
    renderClickable(e) {
        var t;
        let {
                layoutClass: n,
                props: { className: r, index: a, selected: o }
            } = this,
            l = this.isSelectable();
        return (0, i.jsx)(
            d.P3F,
            j(M({}, e), {
                className: s()(L.clickable, r, n),
                id: null != (t = B(a)) ? t : void 0,
                onClick: l ? this.handleClick : void 0,
                onMouseMove: l
                    ? () => {
                          (this.setState({ hovered: !0 }), this.handleMouseEnter());
                      }
                    : void 0,
                onMouseLeave: l ? () => this.setState({ hovered: !1 }) : void 0,
                role: 'option',
                'aria-disabled': !l,
                'aria-selected': l && o,
                children: (0, i.jsx)('div', {
                    className: L.base,
                    children: this.renderContent()
                })
            })
        );
    }
    render() {
        let { index: e } = this.props;
        return this.isSelectable()
            ? (0, i.jsx)(u.mh, {
                  id: ''.concat(e),
                  children: (e) => this.renderClickable(e)
              })
            : this.renderClickable();
    }
    constructor(e) {
        (super(e),
            x(this, 'selectable', !0),
            x(this, 'layoutClass', L.autocompleteRowVertical),
            x(this, 'handleMouseEnter', () => {
                let { onHover: e, index: t, selected: n } = this.props;
                null == e || n || 'number' != typeof t || e(t);
            }),
            x(this, 'handleClick', (e) => {
                let { onClick: t, index: n } = this.props;
                null != t && 'number' == typeof n && t(n, e);
            }),
            (this.state = { hovered: !1 }));
    }
}
class H extends Z {
    renderContent() {
        let { text: e, description: t } = this.props;
        return (0, i.jsxs)(R.RX, {
            children: [(0, i.jsx)(R.z5, { children: (0, i.jsx)(R.BR, { children: e }) }), null != t ? (0, i.jsx)(R.dY, { children: t }) : null]
        });
    }
}
function Y(e) {
    let t = a.useMemo(() => c().random(60, 120), []);
    return (0, i.jsx)('div', {
        className: L.base,
        'aria-busy': !0,
        children: (0, i.jsx)(R.RX, {
            children: (0, i.jsx)(R.z5, {
                children: (0, i.jsx)(R.BR, {
                    children: (0, i.jsx)('div', {
                        className: L.autocompletePlaceholder,
                        style: { width: t }
                    })
                })
            })
        })
    });
}
function W(e) {
    let { title: t, className: n, children: r } = e,
        o = a.useContext(F);
    return (0, i.jsx)('div', {
        className: L.base,
        children: (0, i.jsxs)(d.X6q, {
            id: V(o.id),
            className: s()(L.contentTitle, n),
            variant: 'heading-deprecated-12/semibold',
            children: [t, r]
        })
    });
}
class K extends Z {
    renderContent() {
        let { className: e } = this.props;
        return (0, i.jsx)('div', { className: s()(e, L.divider) });
    }
    constructor(...e) {
        (super(...e), x(this, 'layoutClass', L.dividerContainer), x(this, 'selectable', !1));
    }
}
class z extends Z {
    renderContent() {
        var e;
        let { user: t, nick: n, status: r, hidePersonalInformation: a, guildId: o } = this.props,
            s = null == o ? S.Z.getNickname(t.id) : null;
        return (0, i.jsxs)(R.RX, {
            children: [
                (0, i.jsx)(R.Tw, {
                    children: (0, i.jsx)(d.qEK, {
                        size: d.EFr.SIZE_24,
                        src: t.getAvatarURL(o, 24),
                        'aria-hidden': !0,
                        status: r
                    })
                }),
                (0, i.jsx)(R.z5, { children: (0, i.jsx)(R.BR, { children: null != (e = null != n ? n : s) ? e : C.ZP.getName(t) }) }),
                (0, i.jsxs)(R.dY, {
                    children: [
                        C.ZP.getUserTag(t, {
                            mode: 'username',
                            identifiable: a ? 'never' : 'always'
                        }),
                        a || t.hasUniqueUsername()
                            ? null
                            : (0, i.jsxs)('span', {
                                  className: L.descriptionDiscriminator,
                                  children: ['#', t.discriminator]
                              })
                    ]
                })
            ]
        });
    }
}
class q extends Z {
    renderContent() {
        let { role: e, hideDescription: t, guildId: n } = this.props,
            { colorString: r, colorStrings: a } = e,
            o = 'dot' === _.Z.roleStyle,
            l = 'username' === _.Z.roleStyle && (null != r || null != a),
            c = (0, b.AQ)(n, e, a),
            u = null != c && l,
            { gradientStyle: f, gradientClassname: p } = (0, d.JUn)({
                colorStrings: a,
                useReducedMotion: _.Z.useReducedMotion,
                roleStyle: 'username',
                includeConvenienceGlow: !0
            }),
            h = l ? M({}, u ? f : { color: null != r ? r : void 0 }) : void 0;
        return (0, i.jsxs)(R.RX, {
            children: [
                (0, i.jsx)(R.z5, {
                    children: (0, i.jsxs)(R.BR, {
                        children: [
                            o &&
                                (0, i.jsx)(d.FhE, {
                                    className: L.roleDot,
                                    color: r,
                                    colors: c,
                                    tooltip: !1
                                }),
                            (0, i.jsxs)('span', {
                                className: s()({ [p]: u }),
                                style: h,
                                'data-text': u ? '@'.concat(e.name) : void 0,
                                children: ['@', e.name]
                            })
                        ]
                    })
                }),
                t ? null : (0, i.jsx)(R.dY, { children: D.intl.string(D.t['/91tbm']) })
            ]
        });
    }
}
class X extends Z {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === P.d4z.GUILD_CATEGORY ? d.ROc : (0, g.KS)(e);
        return (0, i.jsxs)(R.RX, {
            children: [null != n && (0, i.jsx)(R.Tw, { children: (0, i.jsx)(n, { className: L.icon }) }), (0, i.jsx)(R.z5, { children: (0, i.jsx)(R.BR, { children: (0, m.F6)(e, A.default, S.Z) }) }), null != t ? (0, i.jsx)(R.dY, { children: t.name }) : null]
        });
    }
}
class Q extends Z {
    renderContent() {
        let { command: e } = this.props;
        return (0, i.jsxs)(R.RX, {
            children: [
                (0, i.jsx)(R.Tw, {
                    children: (0, i.jsx)(d.XZC, {
                        size: 'xs',
                        color: 'currentColor',
                        className: L.icon,
                        colorClass: L.iconForeground
                    })
                }),
                (0, i.jsx)(R.z5, { children: (0, i.jsx)(R.BR, { children: e.displayName }) }),
                (0, i.jsx)(R.dY, { children: e.displayDescription })
            ]
        });
    }
}
class J extends Z {
    isSelectable() {
        return this.props.command.inputType !== f.iw.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: r, selected: a } = this.props,
            { hovered: o } = this.state,
            s = this.isSelectable();
        return e.inputType === f.iw.PLACEHOLDER
            ? (0, i.jsx)(h.Z, {})
            : (0, i.jsx)(p.Z, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: o || (s && a),
                  section: r,
                  isSelectable: s
              });
    }
}
class $ extends Z {
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            r = I.Yk.getSetting(),
            a =
                null != e.id || '' !== e.url
                    ? (0, i.jsx)('img', {
                          alt: '',
                          className: L.emojiImage,
                          src:
                              null != e.id
                                  ? N.ZP.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && r,
                                        size: w.$U
                                    })
                                  : e.url
                      })
                    : (0, i.jsx)('span', {
                          className: L.emojiRaw,
                          children: e.surrogates
                      }),
            o = null != n ? (0, i.jsx)(R.dY, { children: n.name }) : null;
        return (0, i.jsxs)(R.RX, {
            children: [
                (0, i.jsx)(R.Tw, { children: a }),
                (0, i.jsx)(R.z5, {
                    children: (0, i.jsxs)(R.BR, {
                        children: [t, e.name, t]
                    })
                }),
                o
            ]
        });
    }
    constructor(...e) {
        (super(...e), x(this, 'layoutClass', s()(L.autocompleteRowVertical, L.autocompleteRowVerticalSmall)));
    }
}
class ee extends Z {
    renderContent() {
        var e, t;
        let n,
            { queryMatch: r, renderSticker: a, selected: o, sticker: s } = this.props,
            { hovered: l } = this.state;
        return (
            (0, v.jl)(s) ? (n = null == (e = O.Z.getStickerPack(s.pack_id)) ? void 0 : e.name) : (0, v.J8)(s) && (n = null == (t = T.Z.getGuild(s.guild_id)) ? void 0 : t.name),
            (0, i.jsxs)(R.RX, {
                children: [
                    (0, i.jsx)(R.Tw, { children: a(s, l || !0 === o) }),
                    (0, i.jsxs)(R.z5, {
                        children: [(0, i.jsx)(R.BR, { children: s.name }), null != r && (0, i.jsx)(R.wL, { children: D.intl.format(D.t.PAutaW, { queryMatch: r }) })]
                    }),
                    null != n && (0, i.jsx)(R.dY, { children: n })
                ]
            })
        );
    }
    constructor(...e) {
        (super(...e), x(this, 'layoutClass', s()(L.autocompleteRowVertical, L.autocompleteRowVerticalSmall)));
    }
}
class et extends Z {
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, i.jsx)('img', {
            alt: '',
            src: n,
            width: e,
            height: t
        });
    }
    constructor(...e) {
        (super(...e), x(this, 'layoutClass', L.autocompleteRowHorizontal));
    }
}
class en extends Z {
    renderContent() {
        return (0, i.jsx)(E.Z, { emojis: this.props.emojis });
    }
}
class er extends Z {
    renderContent() {
        return (0, i.jsx)(y.Z, M({}, this.props));
    }
}
class ei extends Z {
    renderContent() {
        let { game: e } = this.props,
            t = (0, i.jsx)('img', {
                alt: '',
                className: L.icon,
                src: N.ZP.getApplicationIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 32
                })
            });
        return (0, i.jsxs)(R.RX, {
            children: [(0, i.jsx)(R.Tw, { children: t }), (0, i.jsx)(R.z5, { children: (0, i.jsx)(R.BR, { children: e.name }) })]
        });
    }
}
class ea extends (r = a.PureComponent) {
    render() {
        let e = this.props,
            { children: t, className: n, innerClassName: r, id: o } = e,
            l = U(e, ['children', 'className', 'innerClassName', 'id']);
        return a.Children.count(t) > 0
            ? (0, i.jsx)(F.Provider, {
                  value: { id: null != o ? o : '' },
                  children: (0, i.jsx)('div', {
                      className: s()(L.autocomplete, n),
                      children: (0, i.jsx)('div', j(M({ className: s()(L.autocompleteInner, r) }, l), { children: t }))
                  })
              })
            : null;
    }
}
(x(ea, 'Generic', H), x(ea, 'Loading', Y), x(ea, 'Title', W), x(ea, 'Divider', K), x(ea, 'User', z), x(ea, 'Role', q), x(ea, 'Channel', X), x(ea, 'Command', Q), x(ea, 'NewCommand', J), x(ea, 'Emoji', $), x(ea, 'GIFIntegration', et), x(ea, 'Sticker', ee), x(ea, 'EmojiUpsell', en), x(ea, 'Soundmoji', er), x(ea, 'Game', ei));
let eo = ea;
