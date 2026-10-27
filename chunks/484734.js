n.d(t, {
    KJ: () => H,
    N_: () => K,
    vw: () => W,
    lg: () => Y,
    nG: () => F,
    c3: () => Z,
    OS: () => G,
    Y9: () => z,
    IH: () => B,
});
var i = n(477900),
    s = n(582128),
    r = n(939249),
    l = n(97808),
    a = n(778712),
    o = n(685761),
    c = n(173936),
    d = n(99677),
    u = n(194261),
    h = n(34188),
    C = n(577473),
    A = n(403581),
    g = n(323384),
    E = n(625903),
    p = n(659421),
    _ = n(329308),
    f = n(571694),
    m = n(47167),
    T = n(713654),
    v = n(503698),
    N = n.n(v),
    x = n(62986);
let I = function (e) {
    let { value: t = 0, text: n, className: s, lowImportance: r, ...l } = e;
    return null != n
        ? (0, i.jsx)("div", { className: N()(x.i, s, r && x.H), ...l, children: n })
        : t > 0
          ? (0, i.jsx)("div", { className: N()(x.i, s, r && x.H), ...l, children: t })
          : null;
};
var O = n(769015),
    S = n(168017),
    U = n(106191),
    L = n(548118),
    R = n(376943),
    j = n(636585),
    w = n(71393),
    y = n(994500),
    D = n(287809),
    M = n(147036),
    b = n(427262),
    k = n(105292),
    P = n(445388);
class V extends s.PureComponent {
    node;
    componentDidMount() {
        let { focused: e, onFocus: t } = this.props,
            { node: n } = this;
        e && null != n && t(n);
    }
    componentDidUpdate(e) {
        let { focused: t, onFocus: n } = this.props,
            { node: i } = this;
        null != i && t && !e.focused && n(i);
    }
    handleClick = (e) => {
        e.preventDefault();
        let { onClick: t } = this.props,
            { node: n } = this;
        null != n && t(e, n);
    };
    handleMouseEnter = (e) => {
        let { onMouseEnter: t } = this.props,
            { node: n } = this;
        null != n && t(e, n);
    };
    setRef = (e) => {
        this.node = e;
    };
    render() {
        let { focused: e, children: t, score: n, onContextMenu: s, id: l, "aria-label": a } = this.props;
        return (0, i.jsxs)(r.D, {
            role: "option",
            id: l,
            "aria-label": a,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: P.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: s,
            children: [t, null != n ? (0, i.jsx)("div", { className: P.fN, children: 0 | n }) : null],
        });
    }
}
class G extends s.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: P._C,
            children: (0, i.jsx)(L.Ay, { tabIndex: -1, guild: e, size: L.Ay.Sizes.MINI, className: P.$f }),
        });
    }
    renderName() {
        let { guild: e, inlineLabel: t } = this.props;
        return (0, i.jsxs)("div", {
            className: P.UU,
            children: [
                (0, i.jsx)("span", { className: P.YW, children: e.name }),
                null != t ? (0, i.jsx)("span", { className: P.N4, children: t }) : null,
            ],
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: e ? P.XB : P.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: P.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return k.intl.formatToPlainString(k.t.WVq3Lr, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: s, focused: r, score: l, id: a } = this.props;
        return (0, i.jsx)(V, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: s,
            focused: r,
            score: l,
            children: this.renderContent(),
        });
    }
}
class Z extends s.Component {
    static defaultProps = { unread: !1 };
    renderIcon() {
        let { channel: e } = this.props,
            t = (0, T.gU)(e);
        if (null == t) return null;
        let n = (0, M.Jg)(e) ?? "";
        return (0, i.jsx)("div", {
            className: P.zc,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(t, { className: P.Kk, size: "xs", color: "currentColor" }),
        });
    }
    renderName() {
        let e,
            t,
            { mentions: n, category: s, channel: r, isMentionLowImportance: l } = this.props;
        return (
            null != n && n > 0 && (e = (0, i.jsx)(I, { className: P.qS, value: n, lowImportance: l })),
            null != s && (t = (0, i.jsx)("span", { className: P.N4, children: (0, m.m1)(s, D.default, y.A) })),
            (0, i.jsxs)("div", {
                className: P.UU,
                children: [
                    (0, i.jsx)("span", { className: P.YW, children: (0, m.m1)(r, D.default, y.A) }),
                    e,
                    this.renderVoiceStates(),
                    t,
                ],
            })
        );
    }
    renderVoiceStates() {
        let { voiceStates: e, channel: t } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(j.A, {
                  className: P.x7,
                  guildId: t.guild_id,
                  users: e.map((e) => {
                      let { user: t } = e;
                      return { user: t };
                  }),
                  max: 4,
              });
    }
    renderContent() {
        let { unread: e, mentions: t, children: n } = this.props;
        return (0, i.jsxs)("div", {
            "aria-hidden": !0,
            className: e || (null != t && t > 0) ? P.XB : P.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: P.Lr, children: n })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e } = this.props,
            t = w.A.getGuild(this.props.channel.guild_id)?.name,
            n = (0, m.m1)(e, D.default, y.A),
            i = (0, M.Jg)(e);
        return k.intl.formatToPlainString(k.t["Vw/da+"], { name: n, type: i, guild: t });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: s, focused: r, score: l, id: a } = this.props;
        return (0, i.jsx)(V, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: s,
            focused: r,
            score: l,
            children: this.renderContent(),
        });
    }
}
class F extends s.Component {
    renderIcon() {
        let { channel: e, status: t } = this.props;
        return (0, i.jsx)("div", {
            className: P.IU,
            children: (0, i.jsx)(l.eu, { src: (0, f.Y)(e), size: a._3.SIZE_20, "aria-hidden": !0, status: t }),
        });
    }
    renderName() {
        let e,
            { mentions: t, channel: n } = this.props;
        return (
            null != t && t > 0 && (e = (0, i.jsx)(I, { className: P.qS, value: t })),
            (0, i.jsxs)("div", {
                className: P.UU,
                children: [(0, i.jsx)("span", { className: P.YW, children: (0, m.m1)(n, D.default, y.A) }), e],
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? P.XB : P.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: P.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, m.m1)(e, D.default, y.A);
        return null != t && t > 0
            ? k.intl.formatToPlainString(k.t.LYdVfN, { name: n, mentions: t })
            : k.intl.formatToPlainString(k.t.lLSbno, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: s, focused: r, score: l, id: a } = this.props;
        return (0, i.jsx)(V, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: s,
            focused: r,
            score: l,
            children: this.renderContent(),
        });
    }
}
class H extends s.Component {
    renderIcon() {
        let { user: e, status: t, isMobile: n } = this.props;
        return (0, i.jsx)("div", {
            className: P.zc,
            children: (0, i.jsx)(l.eu, {
                src: e.getAvatarURL(void 0, 20),
                "aria-hidden": !0,
                size: a._3.SIZE_20,
                status: t,
                isMobile: n,
            }),
        });
    }
    getDisplayNickname() {
        let e,
            { user: t, comparator: n } = this.props,
            i = y.A.getNickname(t.id);
        return (
            ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) &&
                (e = i ?? b.Ay.getName(t)),
            e
        );
    }
    renderName() {
        let e,
            { user: t, mentions: n } = this.props,
            s = this.getDisplayNickname();
        return (
            null != n && n > 0 && (e = (0, i.jsx)(I, { className: P.qS, value: n })),
            (0, i.jsxs)("div", {
                className: P.UU,
                children: [
                    (0, i.jsx)("span", { className: P.YW, children: s }),
                    e,
                    (0, i.jsx)("span", { className: P.Xh, children: b.Ay.getUserTag(t) }),
                ],
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? P.XB : P.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: P.Lr, children: e })],
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            i = b.Ay.getUserTag(t);
        return null != e && e > 0
            ? k.intl.formatToPlainString(k.t["6b9UrR"], { name: n, id: i, mentions: e })
            : k.intl.formatToPlainString(k.t.GWYOAY, { name: n, id: i });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: s, focused: r, score: l, id: a } = this.props;
        return (0, i.jsx)(V, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: s,
            focused: r,
            score: l,
            children: this.renderContent(),
        });
    }
}
class Y extends s.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)("div", {
            className: P.xr,
            children: [
                (0, i.jsx)("div", {
                    className: P.zc,
                    children: (0, i.jsx)(O.A, { tabIndex: -1, className: P.Gt, game: t, size: P.D0 }),
                }),
                t.name,
                (0, i.jsx)("div", { className: P.Lr, children: e }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: s, id: r } = this.props;
        return (0, i.jsx)(V, {
            id: r,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: s,
            children: this.renderContent(),
        });
    }
}
function B(e) {
    let { game: t, onMouseEnter: n, onClick: s, onFocus: r, focused: l, id: a, inlineLabel: o, children: c } = e,
        { extraChromeEnabled: d } = S.A.useConfig({ location: "quickswitcher" });
    return (0, i.jsx)(V, {
        id: a,
        onMouseEnter: n,
        onClick: s,
        onFocus: r,
        focused: l,
        children: (0, i.jsxs)("div", {
            className: P.xr,
            children: [
                (0, i.jsx)("div", {
                    className: P.zc,
                    children: (0, i.jsx)(U.A, { game: t, iconClassName: P.bN, withBackground: d }),
                }),
                (0, i.jsxs)("div", {
                    className: P.UU,
                    children: [
                        (0, i.jsx)("span", { className: P.YW, children: t.name }),
                        null != o ? (0, i.jsx)("span", { className: P.N4, children: o }) : null,
                    ],
                }),
                (0, i.jsx)("div", { className: P.Lr, children: c }),
            ],
        }),
    });
}
class z extends s.Component {
    render() {
        return (0, i.jsx)("div", {
            className: P.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: P.xr,
                children: (0, i.jsx)("div", { className: P.wx, children: this.props.children }),
            }),
        });
    }
}
class K extends s.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: s } = this.props;
        if (null != n.inviteCode)
            ((e = k.intl.string(k.t.w6QG3F)), (t = (0, i.jsx)(o.f, { size: "xs", color: "currentColor" })));
        else {
            let s = (0, R.vu)(n.path);
            null == s || void 0 === s.messageId
                ? ((e = k.intl.string(k.t.qbSCqj)), (t = (0, i.jsx)(c.LinkIcon, { size: "xs", color: "currentColor" })))
                : (0, R.r9)(s)
                  ? ((e = k.intl.string(k.t["6Fd/j1"])), (t = (0, i.jsx)(d.t, { size: "xs", color: "currentColor" })))
                  : ((e = k.intl.string(k.t.jQRwp4)),
                    (t = (0, i.jsx)(u.LockIcon, { size: "xs", color: "currentColor" })));
        }
        return (0, i.jsxs)("div", {
            className: P.xr,
            children: [
                (0, i.jsx)("div", { className: P.zc, children: t }),
                e,
                (0, i.jsx)("div", { className: P.Lr, children: s }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: s, focused: r, score: l, id: a } = this.props;
        return (0, i.jsx)(V, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: s,
            focused: r,
            score: l,
            children: this.renderContent(),
        });
    }
}
class W extends s.Component {
    renderContent() {
        let e,
            t,
            { navigationRecord: n, children: s } = this.props;
        switch (n.type) {
            case _.t1.SHOP:
                ((e = k.intl.string(k.t.pWG4ze)), (t = (0, i.jsx)(h.U, { size: "xs", color: "currentColor" })));
                break;
            case _.t1.SHOP_ORBS_TAB:
                ((e = k.intl.string(k.t.fG3RIg)), (t = (0, i.jsx)(h.U, { size: "xs", color: "currentColor" })));
                break;
            case _.t1.QUEST_ORBS:
                ((e = `${k.intl.string(k.t.ElYQFS)} ${k.intl.string(k.t.JALI2K)}`),
                    (t = (0, i.jsx)(C.r, { size: "xs", color: "currentColor" })));
                break;
            case _.t1.NITRO_HOME:
                ((e = k.intl.string(k.t.Ipxkog)), (t = (0, i.jsx)(A.t, { size: "xs", color: "currentColor" })));
                break;
            case _.t1.QUEST_HOME:
                ((e = k.intl.string(k.t.JALI2K)), (t = (0, i.jsx)(C.r, { size: "xs", color: "currentColor" })));
                break;
            case _.t1.APPS_HOME:
                ((e = k.intl.string(k.t.PHjkRE)), (t = (0, i.jsx)(g.k, { size: "xs", color: "currentColor" })));
                break;
            case _.t1.SETTINGS:
                ((e = n.label ?? k.intl.string(k.t["3D5yo/"])),
                    (t = (0, i.jsx)(E.SettingsIcon, { size: "xs", color: "currentColor" })));
                break;
            case _.t1.PLAYGROUND:
                if (((e = n.label ?? `${n.collectionId} Playground`), null != n.IconComponent)) {
                    let e = n.IconComponent;
                    t = (0, i.jsx)(e, { size: "xs", color: "currentColor" });
                } else t = (0, i.jsx)(p.H, { size: "xs", color: "currentColor" });
                break;
            default:
                ((e = n.id), (t = (0, i.jsx)(c.LinkIcon, { size: "xs", color: "currentColor" })));
        }
        return (0, i.jsxs)("div", {
            className: P.xr,
            children: [
                (0, i.jsx)("div", { className: P.zc, children: t }),
                (0, i.jsx)("div", { className: P.UU, children: e }),
                (0, i.jsx)("div", { className: P.Lr, children: s }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: s, focused: r, score: l, id: a } = this.props;
        return (0, i.jsx)(V, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: s,
            focused: r,
            score: l,
            children: this.renderContent(),
        });
    }
}
