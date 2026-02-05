i.d(t, { O: () => S });
var n = i(627968),
    s = i(64700),
    l = i(397927),
    a = i(832712),
    r = i(414079),
    d = i(47167),
    o = i(713654),
    c = i(235986),
    u = i(734057),
    g = i(769765),
    h = i(994500),
    x = i(287809),
    m = i(477427),
    A = i(652215),
    N = i(985018),
    j = i(453235);
class S extends s.PureComponent {
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
    setMessageNotification(e, t, i) {
        let { channel: n } = this.props,
            s = n.getGuildId();
        null != s && a.A.updateChannelOverrideSettings(s, n.id, { message_notifications: e, muted: t ?? !1 }, i);
    }
    handleRadioChange(e) {
        this.setMessageNotification(e, void 0, m.G_.notifications(e));
    }
    handleMute = (e) => {
        let { messageNotifications: t } = this.props;
        this.setMessageNotification(t ?? A.orn.NULL, e, m.G_.muted(e));
    };
    handleDelete = () => {
        let { onDelete: e, channel: t } = this.props;
        this.setMessageNotification(A.orn.NULL, !1, m.fd.OverrideDeleted), null != e && e(t.id);
    };
    renderMessageNotificationsRadioOption(e) {
        let { messageNotifications: t, guildMuted: i, guildMessageNotifications: s } = this.props,
            a = t === e;
        return (
            (null == t || t === A.orn.NULL) && e === s && (a = !0),
            (0, n.jsx)(l.Checkbox, {
                checked: !i && a,
                label: "",
                disabled: i,
                onChange: this.handleRadioChange.bind(this, e),
            })
        );
    }
    renderName() {
        let e,
            t,
            { channel: i } = this.props;
        null != i.parent_id && (e = u.A.getChannel(i.parent_id));
        let s = (0, o.gU)(i);
        if (i.type === A.rbe.GUILD_CATEGORY && null != i.guild_id && "" !== i.guild_id) {
            let e = g.A.getCategories(i.guild_id);
            t = N.intl.formatToPlainString(N.t["2KzH89"], { num: null != e[i.id] ? e[i.id].length : 0 });
        } else
            t =
                null != e
                    ? N.intl.formatToPlainString(N.t.L1zJgb, { categoryName: (0, d.m1)(e, x.default, h.A) })
                    : N.intl.string(N.t.uIzfCE);
        return (0, n.jsxs)(c.A, {
            grow: 1,
            className: j.VW,
            children: [
                null != s ? (0, n.jsx)(s, { className: j.Kk }) : null,
                (0, n.jsxs)("div", {
                    className: j.aT,
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            className: j.HA,
                            children: (0, d.m1)(i, x.default, h.A),
                        }),
                        (0, n.jsx)(l.Text, { variant: "text-xs/normal", className: j.uM, children: t }),
                    ],
                }),
            ],
        });
    }
    renderOptions() {
        let { muted: e, guildMuted: t } = this.props;
        return (0, n.jsxs)(c.A, {
            grow: 0,
            shrink: 0,
            className: j.Pm,
            justify: c.A.Justify.AROUND,
            align: c.A.Align.CENTER,
            children: [
                (0, n.jsx)(c.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? j.mH : j.HI,
                    children: this.renderMessageNotificationsRadioOption(A.orn.ALL_MESSAGES),
                }),
                (0, n.jsx)(c.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? j.mH : j.HI,
                    children: this.renderMessageNotificationsRadioOption(A.orn.ONLY_MENTIONS),
                }),
                (0, n.jsx)(c.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? j.mH : j.HI,
                    children: this.renderMessageNotificationsRadioOption(A.orn.NO_MESSAGES),
                }),
                (0, n.jsx)(c.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: j.dy,
                    children: (0, n.jsx)(l.Checkbox, { checked: e, label: "", onChange: this.handleMute }),
                }),
            ],
        });
    }
    render() {
        let { highlight: e } = this.state;
        return (0, n.jsxs)(l.ZpM, {
            ref: this.contentDomRef,
            outline: !0,
            editable: !0,
            className: e ? j.J$ : j.$Z,
            children: [
                this.renderName(),
                this.renderOptions(),
                (0, n.jsx)(r.A, { className: j.ZY, onClick: this.handleDelete }),
            ],
        });
    }
}
