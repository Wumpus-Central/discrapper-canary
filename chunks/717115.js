n.d(t, { O: () => v });
var i = n(627968),
    s = n(64700),
    l = n(150934),
    a = n(834730),
    r = n(359778),
    d = n(832712),
    o = n(414079),
    c = n(47167),
    u = n(713654),
    h = n(235986),
    g = n(734057),
    m = n(769765),
    x = n(994500),
    A = n(287809),
    N = n(477427),
    j = n(652215),
    S = n(985018),
    p = n(964952);
class v extends s.PureComponent {
    _timeout;
    contentDomRef = s.createRef();
    state = { highlight: !1 };
    highlight() {
        this.setState({ highlight: !0 }, () => {
            null != this._timeout && clearTimeout(this._timeout), (this._timeout = setTimeout(this.unhighlight, 1e3));
        });
    }
    unhighlight = () => {
        this.setState({ highlight: !1 });
    };
    componentDidMount() {
        this.props.autoFocus && (this.contentDomRef.current?.scrollIntoView({ behavior: "smooth" }), this.highlight());
    }
    componentWillUnmount() {
        null != this._timeout && clearTimeout(this._timeout);
    }
    setMessageNotification(e, t, n) {
        let { channel: i } = this.props,
            s = i.getGuildId();
        null != s && d.A.updateChannelOverrideSettings(s, i.id, { message_notifications: e, muted: t ?? !1 }, n);
    }
    handleRadioChange(e) {
        this.setMessageNotification(e, void 0, N.G_.notifications(e));
    }
    handleMute = (e) => {
        let { messageNotifications: t } = this.props;
        this.setMessageNotification(t ?? j.orn.NULL, e, N.G_.muted(e));
    };
    handleDelete = () => {
        let { onDelete: e, channel: t } = this.props;
        this.setMessageNotification(j.orn.NULL, !1, N.fd.OverrideDeleted), null != e && e(t.id);
    };
    renderMessageNotificationsRadioOption(e) {
        let { messageNotifications: t, guildMuted: n, guildMessageNotifications: s } = this.props,
            a = t === e;
        return (
            (null == t || t === j.orn.NULL) && e === s && (a = !0),
            (0, i.jsx)(l.S, {
                checked: !n && a,
                label: "",
                disabled: n,
                onChange: this.handleRadioChange.bind(this, e),
            })
        );
    }
    renderName() {
        let e,
            t,
            { channel: n } = this.props;
        null != n.parent_id && (e = g.A.getChannel(n.parent_id));
        let s = (0, u.gU)(n);
        if (n.type === j.rbe.GUILD_CATEGORY && null != n.guild_id && "" !== n.guild_id) {
            let e = m.A.getCategories(n.guild_id);
            t = S.intl.formatToPlainString(S.t["2KzH89"], { num: null != e[n.id] ? e[n.id].length : 0 });
        } else
            t =
                null != e
                    ? S.intl.formatToPlainString(S.t.L1zJgb, { categoryName: (0, c.m1)(e, A.default, x.A) })
                    : S.intl.string(S.t.uIzfCE);
        return (0, i.jsxs)(h.A, {
            grow: 1,
            className: p.VW,
            children: [
                null != s ? (0, i.jsx)(s, { className: p.Kk }) : null,
                (0, i.jsxs)("div", {
                    className: p.aT,
                    children: [
                        (0, i.jsx)(a.E, {
                            variant: "text-md/semibold",
                            className: p.HA,
                            children: (0, c.m1)(n, A.default, x.A),
                        }),
                        (0, i.jsx)(a.E, { variant: "text-xs/normal", className: p.uM, children: t }),
                    ],
                }),
            ],
        });
    }
    renderOptions() {
        let { muted: e, guildMuted: t } = this.props;
        return (0, i.jsxs)(h.A, {
            grow: 0,
            shrink: 0,
            className: p.Pm,
            justify: h.A.Justify.AROUND,
            align: h.A.Align.CENTER,
            children: [
                (0, i.jsx)(h.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? p.mH : p.HI,
                    children: this.renderMessageNotificationsRadioOption(j.orn.ALL_MESSAGES),
                }),
                (0, i.jsx)(h.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? p.mH : p.HI,
                    children: this.renderMessageNotificationsRadioOption(j.orn.ONLY_MENTIONS),
                }),
                (0, i.jsx)(h.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? p.mH : p.HI,
                    children: this.renderMessageNotificationsRadioOption(j.orn.NO_MESSAGES),
                }),
                (0, i.jsx)(h.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: p.dy,
                    children: (0, i.jsx)(l.S, { checked: e, label: "", onChange: this.handleMute }),
                }),
            ],
        });
    }
    render() {
        let { highlight: e } = this.state;
        return (0, i.jsxs)(r.Z, {
            ref: this.contentDomRef,
            outline: !0,
            editable: !0,
            className: e ? p.J$ : p.$Z,
            children: [
                this.renderName(),
                this.renderOptions(),
                (0, i.jsx)(o.A, { className: p.ZY, onClick: this.handleDelete }),
            ],
        });
    }
}
