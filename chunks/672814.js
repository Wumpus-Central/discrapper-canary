n.d(t, {
    e: () => x,
    r: () => S,
}),
    n(896048);
var l = n(627968),
    i = n(64700),
    s = n(397927),
    r = n(774300),
    a = n(571694),
    o = n(47167),
    u = n(71393),
    d = n(535820),
    c = n(994500),
    g = n(287809),
    h = n(486020),
    p = n(240248),
    v = n(427262),
    A = n(985018),
    I = n(912579);
function m(e, t, n) {
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
let S = 48;
class x extends i.Component {
    shouldComponentUpdate(e, t) {
        return (
            this.state.sending !== t.sending ||
            this.state.invited !== t.invited ||
            this.state.hovered !== t.hovered ||
            this.props.user !== e.user ||
            this.props.channel !== e.channel
        );
    }
    renderUserOrChannel() {
        let e,
            t,
            n,
            { user: i, channel: r } = this.props;
        if (null != i) (t = i.getAvatarURL(null == r ? void 0 : r.guild_id, 32)), (n = v.Ay.getName(i));
        else if (
            null != r &&
            ((t = (0, a.Y)(r)), (n = (0, o.m1)(r, g.default, c.A)), null == t && null != r.guild_id)
        ) {
            let n = u.A.getGuild(r.guild_id);
            null != n &&
                (null != n.icon
                    ? (t = h.Ay.getGuildIconURL({
                          id: r.guild_id,
                          icon: n.icon,
                          size: 32,
                      }))
                    : (e = (0, p.oN)(n.name)));
        }
        if (null == t || null == n)
            if (null != e)
                return (0, l.jsx)(s.Text, {
                    variant: "text-md/medium",
                    className: I.q9,
                    "aria-hidden": !0,
                    children: e,
                });
            else return null;
        return (0, l.jsx)(s.euF, {
            src: t,
            "aria-label": n,
            size: s._3J.SIZE_32,
            className: I.hO,
        });
    }
    render() {
        let e,
            t,
            { user: n, channel: i } = this.props,
            { sending: r, invited: a } = this.state;
        if (null != n) {
            let l = v.Ay.getName(n),
                i = c.A.getNickname(n.id),
                s = v.Ay.getUserTag(n, { decoration: "never" });
            (e = null != i ? i : l), (t = s);
        }
        let u = (0, l.jsx)(s.Button, {
            variant: "secondary",
            text: a ? A.intl.string(A.t.dVT149) : A.intl.string(A.t.jYnGPG),
            size: "sm",
            loading: r,
            onClick: this.handleClickInvite,
            disabled: a,
        });
        return (0, l.jsxs)("div", {
            className: I.Og,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            children: [
                (0, l.jsxs)("div", {
                    className: I.mQ,
                    children: [
                        this.renderUserOrChannel(),
                        (0, l.jsxs)("div", {
                            className: I.BT,
                            children: [
                                (0, l.jsxs)(s.Text, {
                                    tag: "strong",
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: [e, null != i ? (0, o.m1)(i, g.default, c.A, !0) : null],
                                }),
                                null != t &&
                                    (0, l.jsx)(s.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        children: t,
                                    }),
                            ],
                        }),
                    ],
                }),
                u,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            m(this, "state", {
                sending: !1,
                invited: !1,
                hovered: !1,
            }),
            m(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            m(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            m(this, "getInviteAnalyticsMetadata", () => {
                let { row: e, source: t } = this.props;
                if (null != e)
                    return {
                        suggestionData: d.A.getSelectedInviteMetadata(e),
                        source: t,
                    };
            }),
            m(this, "handleClickInvite", () => {
                let { user: e, channel: t, inviteKey: n, location: l } = this.props;
                null != n &&
                    (null != t
                        ? (this.setState({ sending: !0 }),
                          r.A.enqueue(
                              {
                                  type: r.F.GROUP_DM,
                                  channel: t,
                                  inviteKey: n,
                                  location: l,
                                  inviteAnalyticsMetadata: this.getInviteAnalyticsMetadata(),
                              },
                              (e) => {
                                  this.setState({
                                      sending: !1,
                                      invited: e,
                                  });
                              },
                          ))
                        : null != e &&
                          (this.setState({ sending: !0 }),
                          r.A.enqueue(
                              {
                                  type: r.F.USER,
                                  user: e,
                                  inviteKey: n,
                                  location: l,
                                  inviteAnalyticsMetadata: this.getInviteAnalyticsMetadata(),
                              },
                              (e) => {
                                  this.setState({
                                      sending: !1,
                                      invited: e,
                                  });
                              },
                          )));
            });
    }
}
