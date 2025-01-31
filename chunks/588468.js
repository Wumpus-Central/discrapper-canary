n.d(t, {
    DJ: () => w,
    ZP: () => $,
    rp: () => M
}),
    n(411104),
    n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(392711),
    u = n.n(l),
    c = n(91192),
    d = n(481060),
    f = n(607070),
    _ = n(895924),
    p = n(237375),
    h = n(342687),
    m = n(933557),
    g = n(471445),
    E = n(511618),
    v = n(887120),
    y = n(926491),
    I = n(378233),
    b = n(695346),
    T = n(430824),
    S = n(699516),
    A = n(594174),
    N = n(768581),
    C = n(51144),
    R = n(965386),
    O = n(981631),
    D = n(185923),
    x = n(388032),
    L = n(488735);
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
    return null != e ? 'autocomplete-'.concat(e) : null;
}
function M(e) {
    return 'autocomplete-'.concat(e, '-title');
}
let k = a.createContext(null);
class U extends a.PureComponent {
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
                props: { className: i, index: a, selected: s }
            } = this,
            l = this.isSelectable();
        return (0, r.jsx)(d.P3F, {
            ...e,
            className: o()(L.clickable, i, n),
            id: null !== (t = w(a)) && void 0 !== t ? t : void 0,
            onClick: l ? this.handleClick : void 0,
            onMouseMove: l
                ? () => {
                      this.setState({ hovered: !0 }), this.handleMouseEnter();
                  }
                : void 0,
            onMouseLeave: l ? () => this.setState({ hovered: !1 }) : void 0,
            role: 'option',
            'aria-disabled': !l,
            'aria-selected': l && s,
            children: (0, r.jsx)('div', {
                className: L.base,
                children: this.renderContent()
            })
        });
    }
    render() {
        let { index: e } = this.props;
        return this.isSelectable()
            ? (0, r.jsx)(c.mh, {
                  id: ''.concat(e),
                  children: (e) => this.renderClickable(e)
              })
            : this.renderClickable();
    }
    constructor(e) {
        super(e),
            P(this, 'selectable', !0),
            P(this, 'layoutClass', L.autocompleteRowVertical),
            P(this, 'handleMouseEnter', () => {
                let { onHover: e, index: t, selected: n } = this.props;
                null == e || n || 'number' != typeof t || e(t);
            }),
            P(this, 'handleClick', (e) => {
                let { onClick: t, index: n } = this.props;
                null != t && 'number' == typeof n && t(n, e);
            }),
            (this.state = { hovered: !1 });
    }
}
class G extends U {
    renderContent() {
        let { text: e, description: t } = this.props;
        return (0, r.jsxs)(R.RX, {
            children: [(0, r.jsx)(R.z5, { children: (0, r.jsx)(R.BR, { children: e }) }), null != t ? (0, r.jsx)(R.dY, { children: t }) : null]
        });
    }
}
function B(e) {
    let t = a.useMemo(() => u().random(60, 120), []);
    return (0, r.jsx)('div', {
        className: L.base,
        'aria-busy': !0,
        children: (0, r.jsx)(R.RX, {
            children: (0, r.jsx)(R.z5, {
                children: (0, r.jsx)(R.BR, {
                    children: (0, r.jsx)('div', {
                        className: L.autocompletePlaceholder,
                        style: { width: t }
                    })
                })
            })
        })
    });
}
function Z(e) {
    let { title: t, className: n, children: i } = e,
        s = a.useContext(k);
    return (0, r.jsx)('div', {
        className: L.base,
        children: (0, r.jsxs)(d.X6q, {
            id: M(s.id),
            className: o()(L.contentTitle, n),
            variant: 'heading-deprecated-12/semibold',
            children: [t, i]
        })
    });
}
class F extends U {
    renderContent() {
        let { className: e } = this.props;
        return (0, r.jsx)('div', { className: o()(e, L.divider) });
    }
    constructor(...e) {
        super(...e), P(this, 'layoutClass', L.dividerContainer), P(this, 'selectable', !1);
    }
}
class V extends U {
    renderContent() {
        var e;
        let { user: t, nick: n, status: i, hidePersonalInformation: a, guildId: s } = this.props,
            o = null == s ? S.Z.getNickname(t.id) : null;
        return (0, r.jsxs)(R.RX, {
            children: [
                (0, r.jsx)(R.Tw, {
                    children: (0, r.jsx)(d.qEK, {
                        size: d.EFr.SIZE_24,
                        src: t.getAvatarURL(s, 24),
                        'aria-hidden': !0,
                        status: i
                    })
                }),
                (0, r.jsx)(R.z5, { children: (0, r.jsx)(R.BR, { children: null !== (e = null != n ? n : o) && void 0 !== e ? e : C.ZP.getName(t) }) }),
                (0, r.jsxs)(R.dY, {
                    children: [
                        C.ZP.getUserTag(t, {
                            mode: 'username',
                            identifiable: a ? 'never' : 'always'
                        }),
                        a || t.isPomelo()
                            ? null
                            : (0, r.jsxs)('span', {
                                  className: L.descriptionDiscriminator,
                                  children: ['#', t.discriminator]
                              })
                    ]
                })
            ]
        });
    }
}
class j extends U {
    renderContent() {
        let { role: e, hideDescription: t } = this.props,
            { colorString: n } = e,
            i = 'dot' === f.Z.roleStyle,
            a = 'username' === f.Z.roleStyle && null != n ? { color: n } : void 0;
        return (0, r.jsxs)(R.RX, {
            children: [
                (0, r.jsx)(R.z5, {
                    children: (0, r.jsxs)(R.BR, {
                        children: [
                            i &&
                                (0, r.jsx)(d.FhE, {
                                    className: L.roleDot,
                                    color: n,
                                    tooltip: !1
                                }),
                            (0, r.jsxs)('span', {
                                style: a,
                                children: ['@', e.name]
                            })
                        ]
                    })
                }),
                t ? null : (0, r.jsx)(R.dY, { children: x.intl.string(x.t['/91tbm']) })
            ]
        });
    }
}
class H extends U {
    renderContent() {
        let { channel: e, category: t } = this.props,
            n = e.type === O.d4z.GUILD_CATEGORY ? d.ROc : (0, g.KS)(e);
        return (0, r.jsxs)(R.RX, {
            children: [null != n && (0, r.jsx)(R.Tw, { children: (0, r.jsx)(n, { className: L.icon }) }), (0, r.jsx)(R.z5, { children: (0, r.jsx)(R.BR, { children: (0, m.F6)(e, A.default, S.Z) }) }), null != t ? (0, r.jsx)(R.dY, { children: t.name }) : null]
        });
    }
}
class Y extends U {
    renderContent() {
        let { command: e } = this.props;
        return (0, r.jsxs)(R.RX, {
            children: [
                (0, r.jsx)(R.Tw, {
                    children: (0, r.jsx)(d.XZC, {
                        size: 'xs',
                        color: 'currentColor',
                        className: L.icon,
                        colorClass: L.iconForeground
                    })
                }),
                (0, r.jsx)(R.z5, { children: (0, r.jsx)(R.BR, { children: e.displayName }) }),
                (0, r.jsx)(R.dY, { children: e.displayDescription })
            ]
        });
    }
}
class W extends U {
    isSelectable() {
        return this.props.command.inputType !== _.iw.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: t, showImage: n, section: i, selected: a } = this.props,
            { hovered: s } = this.state,
            o = this.isSelectable();
        return e.inputType === _.iw.PLACEHOLDER
            ? (0, r.jsx)(h.Z, {})
            : (0, r.jsx)(p.Z, {
                  command: e,
                  channel: t,
                  showImage: n,
                  showOptions: s || (o && a),
                  section: i,
                  isSelectable: o
              });
    }
}
class K extends U {
    renderContent() {
        let { emoji: e, sentinel: t, guild: n } = this.props,
            i = b.Yk.getSetting(),
            a =
                null != e.id || '' !== e.url
                    ? (0, r.jsx)('img', {
                          alt: '',
                          className: L.emojiImage,
                          src:
                              null != e.id
                                  ? N.ZP.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && i,
                                        size: D.$U
                                    })
                                  : e.url
                      })
                    : (0, r.jsx)('span', {
                          className: L.emojiRaw,
                          children: e.surrogates
                      }),
            s = null != n ? (0, r.jsx)(R.dY, { children: n.name }) : null;
        return (0, r.jsxs)(R.RX, {
            children: [
                (0, r.jsx)(R.Tw, { children: a }),
                (0, r.jsx)(R.z5, {
                    children: (0, r.jsxs)(R.BR, {
                        children: [t, e.name, t]
                    })
                }),
                s
            ]
        });
    }
    constructor(...e) {
        super(...e), P(this, 'layoutClass', o()(L.autocompleteRowVertical, L.autocompleteRowVerticalSmall));
    }
}
class z extends U {
    renderContent() {
        var e, t;
        let n;
        let { queryMatch: i, renderSticker: a, selected: s, sticker: o } = this.props,
            { hovered: l } = this.state;
        return (
            (0, I.jl)(o) ? (n = null === (e = y.Z.getStickerPack(o.pack_id)) || void 0 === e ? void 0 : e.name) : (0, I.J8)(o) && (n = null === (t = T.Z.getGuild(o.guild_id)) || void 0 === t ? void 0 : t.name),
            (0, r.jsxs)(R.RX, {
                children: [
                    (0, r.jsx)(R.Tw, { children: a(o, l || !0 === s) }),
                    (0, r.jsxs)(R.z5, {
                        children: [(0, r.jsx)(R.BR, { children: o.name }), null != i && (0, r.jsx)(R.wL, { children: x.intl.format(x.t.PAutaW, { queryMatch: i }) })]
                    }),
                    null != n && (0, r.jsx)(R.dY, { children: n })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e), P(this, 'layoutClass', o()(L.autocompleteRowVertical, L.autocompleteRowVerticalSmall));
    }
}
class q extends U {
    renderContent() {
        let { width: e, height: t, src: n } = this.props;
        return (0, r.jsx)('img', {
            alt: '',
            src: n,
            width: e,
            height: t
        });
    }
    constructor(...e) {
        super(...e), P(this, 'layoutClass', L.autocompleteRowHorizontal);
    }
}
class Q extends U {
    renderContent() {
        return (0, r.jsx)(E.Z, { emojis: this.props.emojis });
    }
}
class X extends U {
    renderContent() {
        return (0, r.jsx)(v.Z, { ...this.props });
    }
}
class J extends (i = a.PureComponent) {
    render() {
        let { children: e, className: t, innerClassName: n, id: i, ...s } = this.props;
        return a.Children.count(e) > 0
            ? (0, r.jsx)(k.Provider, {
                  value: { id: null != i ? i : '' },
                  children: (0, r.jsx)('div', {
                      className: o()(L.autocomplete, t),
                      children: (0, r.jsx)('div', {
                          className: o()(L.autocompleteInner, n),
                          ...s,
                          children: e
                      })
                  })
              })
            : null;
    }
}
P(J, 'Generic', G), P(J, 'Loading', B), P(J, 'Title', Z), P(J, 'Divider', F), P(J, 'User', V), P(J, 'Role', j), P(J, 'Channel', H), P(J, 'Command', Y), P(J, 'NewCommand', W), P(J, 'Emoji', K), P(J, 'GIFIntegration', q), P(J, 'Sticker', z), P(J, 'EmojiUpsell', Q), P(J, 'Soundmoji', X);
let $ = J;
