r.d(n, {
    DJ: function () {
        return U;
    },
    rp: function () {
        return B;
    }
});
var i,
    a = r(411104);
var s = r(47120);
var o = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(392711),
    f = r.n(d),
    _ = r(91192),
    h = r(481060),
    p = r(607070),
    m = r(895924),
    g = r(237375),
    E = r(342687),
    v = r(933557),
    I = r(471445),
    T = r(511618),
    b = r(887120),
    y = r(926491),
    S = r(378233),
    A = r(695346),
    N = r(430824),
    C = r(699516),
    R = r(594174),
    O = r(768581),
    D = r(51144),
    L = r(965386),
    x = r(981631),
    w = r(185923),
    P = r(388032),
    M = r(488735);
function k(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function U(e) {
    return null != e ? 'autocomplete-'.concat(e) : null;
}
function B(e) {
    return 'autocomplete-'.concat(e, '-title');
}
let G = l.createContext(null);
class Z extends l.PureComponent {
    isSelectable() {
        return this.selectable;
    }
    renderContent() {
        throw Error('AutocompleteRow: renderContent must be extended');
    }
    renderClickable(e) {
        var n;
        let {
                layoutClass: r,
                props: { className: i, index: a, selected: s }
            } = this,
            l = this.isSelectable();
        return (0, o.jsx)(h.Clickable, {
            ...e,
            className: c()(M.clickable, i, r),
            id: null !== (n = U(a)) && void 0 !== n ? n : void 0,
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
            children: (0, o.jsx)('div', {
                className: M.base,
                children: this.renderContent()
            })
        });
    }
    render() {
        let { index: e } = this.props;
        return this.isSelectable()
            ? (0, o.jsx)(_.mh, {
                  id: ''.concat(e),
                  children: (e) => this.renderClickable(e)
              })
            : this.renderClickable();
    }
    constructor(e) {
        super(e),
            k(this, 'selectable', !0),
            k(this, 'layoutClass', M.autocompleteRowVertical),
            k(this, 'handleMouseEnter', () => {
                let { onHover: e, index: n, selected: r } = this.props;
                null == e || r || 'number' != typeof n || e(n);
            }),
            k(this, 'handleClick', (e) => {
                let { onClick: n, index: r } = this.props;
                null != n && 'number' == typeof r && n(r, e);
            }),
            (this.state = { hovered: !1 });
    }
}
class F extends Z {
    renderContent() {
        let { text: e, description: n } = this.props;
        return (0, o.jsxs)(L.RX, {
            children: [(0, o.jsx)(L.z5, { children: (0, o.jsx)(L.BR, { children: e }) }), null != n ? (0, o.jsx)(L.dY, { children: n }) : null]
        });
    }
}
function V(e) {
    let n = l.useMemo(() => f().random(60, 120), []);
    return (0, o.jsx)('div', {
        className: M.base,
        'aria-busy': !0,
        children: (0, o.jsx)(L.RX, {
            children: (0, o.jsx)(L.z5, {
                children: (0, o.jsx)(L.BR, {
                    children: (0, o.jsx)('div', {
                        className: M.autocompletePlaceholder,
                        style: { width: n }
                    })
                })
            })
        })
    });
}
function j(e) {
    let { title: n, className: r, children: i } = e,
        a = l.useContext(G);
    return (0, o.jsx)('div', {
        className: M.base,
        children: (0, o.jsxs)(h.Heading, {
            id: B(a.id),
            className: c()(M.contentTitle, r),
            variant: 'heading-deprecated-12/semibold',
            children: [n, i]
        })
    });
}
class H extends Z {
    renderContent() {
        let { className: e } = this.props;
        return (0, o.jsx)('div', { className: c()(e, M.divider) });
    }
    constructor(...e) {
        super(...e), k(this, 'layoutClass', M.dividerContainer), k(this, 'selectable', !1);
    }
}
class Y extends Z {
    renderContent() {
        var e;
        let { user: n, nick: r, status: i, hidePersonalInformation: a, guildId: s } = this.props,
            l = null == s ? C.Z.getNickname(n.id) : null;
        return (0, o.jsxs)(L.RX, {
            children: [
                (0, o.jsx)(L.Tw, {
                    children: (0, o.jsx)(h.Avatar, {
                        size: h.AvatarSizes.SIZE_24,
                        src: n.getAvatarURL(s, 24),
                        'aria-hidden': !0,
                        status: i
                    })
                }),
                (0, o.jsx)(L.z5, { children: (0, o.jsx)(L.BR, { children: null !== (e = null != r ? r : l) && void 0 !== e ? e : D.ZP.getName(n) }) }),
                (0, o.jsxs)(L.dY, {
                    children: [
                        D.ZP.getUserTag(n, {
                            mode: 'username',
                            identifiable: a ? 'never' : 'always'
                        }),
                        a || n.isPomelo()
                            ? null
                            : (0, o.jsxs)('span', {
                                  className: M.descriptionDiscriminator,
                                  children: ['#', n.discriminator]
                              })
                    ]
                })
            ]
        });
    }
}
class W extends Z {
    renderContent() {
        let { role: e, hideDescription: n } = this.props,
            { colorString: r } = e,
            i = 'dot' === p.Z.roleStyle,
            a = 'username' === p.Z.roleStyle && null != r ? { color: r } : void 0;
        return (0, o.jsxs)(L.RX, {
            children: [
                (0, o.jsx)(L.z5, {
                    children: (0, o.jsxs)(L.BR, {
                        children: [
                            i &&
                                (0, o.jsx)(h.RoleDot, {
                                    className: M.roleDot,
                                    color: r,
                                    tooltip: !1
                                }),
                            (0, o.jsxs)('span', {
                                style: a,
                                children: ['@', e.name]
                            })
                        ]
                    })
                }),
                n ? null : (0, o.jsx)(L.dY, { children: P.intl.string(P.t['/91tbm']) })
            ]
        });
    }
}
class K extends Z {
    renderContent() {
        let { channel: e, category: n } = this.props,
            r = e.type === x.d4z.GUILD_CATEGORY ? h.FolderIcon : (0, I.KS)(e);
        return (0, o.jsxs)(L.RX, {
            children: [null != r && (0, o.jsx)(L.Tw, { children: (0, o.jsx)(r, { className: M.icon }) }), (0, o.jsx)(L.z5, { children: (0, o.jsx)(L.BR, { children: (0, v.F6)(e, R.default, C.Z) }) }), null != n ? (0, o.jsx)(L.dY, { children: n.name }) : null]
        });
    }
}
class z extends Z {
    renderContent() {
        let { command: e } = this.props;
        return (0, o.jsxs)(L.RX, {
            children: [
                (0, o.jsx)(L.Tw, {
                    children: (0, o.jsx)(h.SlashIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: M.icon,
                        colorClass: M.iconForeground
                    })
                }),
                (0, o.jsx)(L.z5, { children: (0, o.jsx)(L.BR, { children: e.displayName }) }),
                (0, o.jsx)(L.dY, { children: e.displayDescription })
            ]
        });
    }
}
class q extends Z {
    isSelectable() {
        return this.props.command.inputType !== m.iw.PLACEHOLDER;
    }
    renderContent() {
        let { command: e, channel: n, showImage: r, section: i, selected: a } = this.props,
            { hovered: s } = this.state,
            l = this.isSelectable();
        return e.inputType === m.iw.PLACEHOLDER
            ? (0, o.jsx)(E.Z, {})
            : (0, o.jsx)(g.Z, {
                  command: e,
                  channel: n,
                  showImage: r,
                  showOptions: s || (l && a),
                  section: i,
                  isSelectable: l
              });
    }
}
class Q extends Z {
    renderContent() {
        let { emoji: e, sentinel: n, guild: r } = this.props,
            i = A.Yk.getSetting(),
            a =
                null != e.id || '' !== e.url
                    ? (0, o.jsx)('img', {
                          alt: '',
                          className: M.emojiImage,
                          src:
                              null != e.id
                                  ? O.ZP.getEmojiURL({
                                        id: e.id,
                                        animated: e.animated && i,
                                        size: w.$U
                                    })
                                  : e.url
                      })
                    : (0, o.jsx)('span', {
                          className: M.emojiRaw,
                          children: e.surrogates
                      }),
            s = null != r ? (0, o.jsx)(L.dY, { children: r.name }) : null;
        return (0, o.jsxs)(L.RX, {
            children: [
                (0, o.jsx)(L.Tw, { children: a }),
                (0, o.jsx)(L.z5, {
                    children: (0, o.jsxs)(L.BR, {
                        children: [n, e.name, n]
                    })
                }),
                s
            ]
        });
    }
    constructor(...e) {
        super(...e), k(this, 'layoutClass', c()(M.autocompleteRowVertical, M.autocompleteRowVerticalSmall));
    }
}
class X extends Z {
    renderContent() {
        var e, n;
        let r;
        let { queryMatch: i, renderSticker: a, selected: s, sticker: l } = this.props,
            { hovered: u } = this.state;
        return (
            (0, S.jl)(l) ? (r = null === (e = y.Z.getStickerPack(l.pack_id)) || void 0 === e ? void 0 : e.name) : (0, S.J8)(l) && (r = null === (n = N.Z.getGuild(l.guild_id)) || void 0 === n ? void 0 : n.name),
            (0, o.jsxs)(L.RX, {
                children: [
                    (0, o.jsx)(L.Tw, { children: a(l, u || !0 === s) }),
                    (0, o.jsxs)(L.z5, {
                        children: [(0, o.jsx)(L.BR, { children: l.name }), null != i && (0, o.jsx)(L.wL, { children: P.intl.format(P.t.PAutaW, { queryMatch: i }) })]
                    }),
                    null != r && (0, o.jsx)(L.dY, { children: r })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e), k(this, 'layoutClass', c()(M.autocompleteRowVertical, M.autocompleteRowVerticalSmall));
    }
}
class J extends Z {
    renderContent() {
        let { width: e, height: n, src: r } = this.props;
        return (0, o.jsx)('img', {
            alt: '',
            src: r,
            width: e,
            height: n
        });
    }
    constructor(...e) {
        super(...e), k(this, 'layoutClass', M.autocompleteRowHorizontal);
    }
}
class $ extends Z {
    renderContent() {
        return (0, o.jsx)(T.Z, { emojis: this.props.emojis });
    }
}
class ee extends Z {
    renderContent() {
        return (0, o.jsx)(b.Z, { ...this.props });
    }
}
class et extends (i = l.PureComponent) {
    render() {
        let { children: e, className: n, innerClassName: r, id: i, ...a } = this.props;
        return l.Children.count(e) > 0
            ? (0, o.jsx)(G.Provider, {
                  value: { id: null != i ? i : '' },
                  children: (0, o.jsx)('div', {
                      className: c()(M.autocomplete, n),
                      children: (0, o.jsx)('div', {
                          className: c()(M.autocompleteInner, r),
                          ...a,
                          children: e
                      })
                  })
              })
            : null;
    }
}
k(et, 'Generic', F), k(et, 'Loading', V), k(et, 'Title', j), k(et, 'Divider', H), k(et, 'User', Y), k(et, 'Role', W), k(et, 'Channel', K), k(et, 'Command', z), k(et, 'NewCommand', q), k(et, 'Emoji', Q), k(et, 'GIFIntegration', J), k(et, 'Sticker', X), k(et, 'EmojiUpsell', $), k(et, 'Soundmoji', ee), (n.ZP = et);
