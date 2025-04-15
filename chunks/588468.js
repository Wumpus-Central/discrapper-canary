n.d(t, {
    DJ: () => B,
    ZP: () => eo,
    rp: () => F
}),
    n(415506),
    n(953529),
    n(388685);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(392711),
    c = n.n(l),
    u = n(91192),
    d = n(481060),
    f = n(607070),
    _ = n(895924),
    p = n(237375),
    h = n(342687),
    m = n(933557),
    g = n(471445),
    E = n(511618),
    b = n(181918),
    y = n(887120),
    v = n(926491),
    O = n(378233),
    I = n(695346),
    S = n(430824),
    T = n(699516),
    N = n(594174),
    A = n(768581),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function B(e) {
    return null != e ? 'autocomplete-'.concat(e) : null;
}
function F(e) {
    return 'autocomplete-'.concat(e, '-title');
}
let V = o.createContext(null);
class Z extends o.PureComponent {
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
                props: { className: r, index: o, selected: a }
            } = this,
            l = this.isSelectable();
        return (0, i.jsx)(
            d.P3F,
            j(M({}, e), {
                className: s()(L.clickable, r, n),
                id: null != (t = B(o)) ? t : void 0,
                onClick: l ? this.handleClick : void 0,
                onMouseMove: l
                    ? () => {
                          this.setState({ hovered: !0 }), this.handleMouseEnter();
                      }
                    : void 0,
                onMouseLeave: l ? () => this.setState({ hovered: !1 }) : void 0,
                role: 'option',
                'aria-disabled': !l,
                'aria-selected': l && a,
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
        super(e),
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
            (this.state = { hovered: !1 });
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
function W(e) {
    let t = o.useMemo(() => c().random(60, 120), []);
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
function Y(e) {
    let { title: t, className: n, children: r } = e,
        a = o.useContext(V);
    return (0, i.jsx)('div', {
        className: L.base,
        children: (0, i.jsxs)(d.X6q, {
            id: F(a.id),
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
        super(...e), x(this, 'layoutClass', L.dividerContainer), x(this, 'selectable', !1);
    }
}
class z extends Z {
    renderContent() {
        var e;
        let { user: t, nick: n, status: r, hidePersonalInformation: o, guildId: a } = this.props,
            s = null == a ? T.Z.getNickname(t.id) : null;
        return (0, i.jsxs)(R.RX, {
            children: [
                (0, i.jsx)(R.Tw, {
                    children: (0, i.jsx)(d.qEK, {
                        size: d.EFr.SIZE_24,
                        src: t.getAvatarURL(a, 24),
                        'aria-hidden': !0,
                        status: r
                    })
                }),
                (0, i.jsx)(R.z5, { children: (0, i.jsx)(R.BR, { children: null != (e = null != n ? n : s) ? e : C.ZP.getName(t) }) }),
                (0, i.jsxs)(R.dY, {
                    children: [
                        C.ZP.getUserTag(t, {
                            mode: 'username',
                            identifiable: o ? 'never' : 'always'
                        }),
                        o || t.isPomelo()
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
            { colorString: r, colorStrings: o } = e,
            a = 'dot' === f.Z.roleStyle,
            l = 'username' === f.Z.roleStyle && (null != r || null != o),
            c = (0, b.OC)(n, 'AutocompleteRow') && null != o && null != o.primaryColor && null != o.secondaryColor,
            u = c && l,
            { text: _, gradient: p } = (0, d.JUn)(null == o ? void 0 : o.primaryColor, null == o ? void 0 : o.secondaryColor, null == o ? void 0 : o.tertiaryColor, f.Z.useReducedMotion, 'username'),
            h = l ? M({}, u ? _.gradientStyle : { color: null != r ? r : void 0 }) : void 0;
        return (0, i.jsxs)(R.RX, {
            children: [
                (0, i.jsx)(R.z5, {
                    children: (0, i.jsxs)(R.BR, {
                        children: [
                            a &&
                                (0, i.jsx)(d.FhE, {
                                    className: L.roleDot,
                                    color: r,
                                    colors: c ? o : null,
                                    tooltip: !1
                                }),
                            (0, i.jsxs)('span', {
                                className: s()({
                                    [p.gradientClassName]: u,
                                    [_.gradientClassName]: u
                                }),
                                style: h,
                                'data-text': u ? '@'.concat(e.name) : void 0,
                                children: ['@', e.name]
                            })
                        ]
                    })
                }),
                t ? null : (0, i.jsx)(R.dY, { children: D.NW.string(D.t['/91tbm']) })
            ]
        });
    }
}
class Q extends Z {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === P.d4z.GUILD_CATEGORY ? d.ROc : (0, g.KS)(e);
        return (0, i.jsxs)(R.RX, {
            children: [null != n && (0, i.jsx)(R.Tw, { children: (0, i.jsx)(n, { className: L.icon }) }), (0, i.jsx)(R.z5, { children: (0, i.jsx)(R.BR, { children: (0, m.F6)(e, N.default, T.Z) }) }), null != t ? (0, i.jsx)(R.dY, { children: t.name }) : null]
        });
    }
}
class X extends Z {
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
        return this.props.command.inputType !== _.iw.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: r, selected: o } = this.props,
            { hovered: a } = this.state,
            s = this.isSelectable();
        return e.inputType === _.iw.PLACEHOLDER
            ? (0, i.jsx)(h.Z, {})
            : (0, i.jsx)(p.Z, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: a || (s && o),
                  section: r,
                  isSelectable: s
              });
    }
}
class $ extends Z {
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            r = I.Yk.getSetting(),
            o =
                null != e.id || '' !== e.url
                    ? (0, i.jsx)('img', {
                          alt: '',
                          className: L.emojiImage,
                          src:
                              null != e.id
                                  ? A.ZP.getEmojiURL({
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
            a = null != n ? (0, i.jsx)(R.dY, { children: n.name }) : null;
        return (0, i.jsxs)(R.RX, {
            children: [
                (0, i.jsx)(R.Tw, { children: o }),
                (0, i.jsx)(R.z5, {
                    children: (0, i.jsxs)(R.BR, {
                        children: [t, e.name, t]
                    })
                }),
                a
            ]
        });
    }
    constructor(...e) {
        super(...e), x(this, 'layoutClass', s()(L.autocompleteRowVertical, L.autocompleteRowVerticalSmall));
    }
}
class ee extends Z {
    renderContent() {
        var e, t;
        let n,
            { queryMatch: r, renderSticker: o, selected: a, sticker: s } = this.props,
            { hovered: l } = this.state;
        return (
            (0, O.jl)(s) ? (n = null == (e = v.Z.getStickerPack(s.pack_id)) ? void 0 : e.name) : (0, O.J8)(s) && (n = null == (t = S.Z.getGuild(s.guild_id)) ? void 0 : t.name),
            (0, i.jsxs)(R.RX, {
                children: [
                    (0, i.jsx)(R.Tw, { children: o(s, l || !0 === a) }),
                    (0, i.jsxs)(R.z5, {
                        children: [(0, i.jsx)(R.BR, { children: s.name }), null != r && (0, i.jsx)(R.wL, { children: D.NW.format(D.t.PAutaW, { queryMatch: r }) })]
                    }),
                    null != n && (0, i.jsx)(R.dY, { children: n })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e), x(this, 'layoutClass', s()(L.autocompleteRowVertical, L.autocompleteRowVerticalSmall));
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
        super(...e), x(this, 'layoutClass', L.autocompleteRowHorizontal);
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
class ei extends (r = o.PureComponent) {
    render() {
        let e = this.props,
            { children: t, className: n, innerClassName: r, id: a } = e,
            l = U(e, ['children', 'className', 'innerClassName', 'id']);
        return o.Children.count(t) > 0
            ? (0, i.jsx)(V.Provider, {
                  value: { id: null != a ? a : '' },
                  children: (0, i.jsx)('div', {
                      className: s()(L.autocomplete, n),
                      children: (0, i.jsx)('div', j(M({ className: s()(L.autocompleteInner, r) }, l), { children: t }))
                  })
              })
            : null;
    }
}
x(ei, 'Generic', H), x(ei, 'Loading', W), x(ei, 'Title', Y), x(ei, 'Divider', K), x(ei, 'User', z), x(ei, 'Role', q), x(ei, 'Channel', Q), x(ei, 'Command', X), x(ei, 'NewCommand', J), x(ei, 'Emoji', $), x(ei, 'GIFIntegration', et), x(ei, 'Sticker', ee), x(ei, 'EmojiUpsell', en), x(ei, 'Soundmoji', er);
let eo = ei;
