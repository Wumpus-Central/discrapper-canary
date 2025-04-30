n.d(t, { f: () => N }), n(388685);
var i = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(87051),
    a = n(225433),
    o = n(933557),
    d = n(471445),
    c = n(600164),
    u = n(592125),
    h = n(324067),
    g = n(699516),
    m = n(594174),
    x = n(621600),
    p = n(981631),
    v = n(388032),
    j = n(529651);
function S(e, t, n) {
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
class N extends s.PureComponent {
    highlight() {
        this.setState({ highlight: !0 }, () => {
            null != this._timeout && clearTimeout(this._timeout), (this._timeout = setTimeout(this.unhighlight, 1000));
        });
    }
    componentWillUnmount() {
        null != this._timeout && clearTimeout(this._timeout);
    }
    setMessageNotification(e, t, n) {
        let { channel: i } = this.props,
            s = i.getGuildId();
        null != s &&
            r.Z.updateChannelOverrideSettings(
                s,
                i.id,
                {
                    message_notifications: e,
                    muted: null != t && t
                },
                n
            );
    }
    handleRadioChange(e) {
        this.setMessageNotification(e, void 0, x.UE.notifications(e));
    }
    renderMessageNotificationsRadioOption(e) {
        let { messageNotifications: t, guildMuted: n, muted: s, guildMessageNotifications: r, checkboxColor: a } = this.props,
            o = t === e;
        (null == t || t === p.bL.NULL) && e === r && (o = !0);
        let d = l.XZJ.Types.INVERTED;
        return (
            (s || t === p.bL.NULL || null == t) && (d = l.XZJ.Types.GHOST),
            (0, i.jsx)(l.XZJ, {
                value: !n && o,
                disabled: n,
                shape: l.XZJ.Shapes.ROUND,
                color: a,
                type: d,
                onChange: this.handleRadioChange.bind(this, e)
            })
        );
    }
    renderName() {
        let e,
            t,
            { channel: n } = this.props;
        null != n.parent_id && (e = u.Z.getChannel(n.parent_id));
        let s = (0, d.KS)(n);
        if (n.type === p.d4z.GUILD_CATEGORY && null != n.guild_id && '' !== n.guild_id) {
            let e = h.Z.getCategories(n.guild_id);
            t = v.intl.formatToPlainString(v.t['2KzH8/'], { num: null != e[n.id] ? e[n.id].length : 0 });
        } else t = null != e ? v.intl.formatToPlainString(v.t.L1zJgY, { categoryName: (0, o.F6)(e, m.default, g.Z) }) : v.intl.string(v.t.uIzfCA);
        return (0, i.jsxs)(c.Z, {
            grow: 1,
            className: j.nameContainer,
            children: [
                null != s ? (0, i.jsx)(s, { className: j.icon }) : null,
                (0, i.jsxs)('div', {
                    className: j.channelNameContainer,
                    children: [
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/semibold',
                            className: j.channelName,
                            children: (0, o.F6)(n, m.default, g.Z)
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            className: j.channelNameByline,
                            children: t
                        })
                    ]
                })
            ]
        });
    }
    renderOptions() {
        let { muted: e, guildMuted: t } = this.props;
        return (0, i.jsxs)(c.Z, {
            grow: 0,
            shrink: 0,
            className: j.checkboxGroup,
            justify: c.Z.Justify.AROUND,
            align: c.Z.Align.CENTER,
            children: [
                (0, i.jsx)(c.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? j.checkboxContainerMuted : j.checkboxContainer,
                    children: this.renderMessageNotificationsRadioOption(p.bL.ALL_MESSAGES)
                }),
                (0, i.jsx)(c.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? j.checkboxContainerMuted : j.checkboxContainer,
                    children: this.renderMessageNotificationsRadioOption(p.bL.ONLY_MENTIONS)
                }),
                (0, i.jsx)(c.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? j.checkboxContainerMuted : j.checkboxContainer,
                    children: this.renderMessageNotificationsRadioOption(p.bL.NO_MESSAGES)
                }),
                (0, i.jsx)(c.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: j.checkboxMute,
                    children: (0, i.jsx)(l.XZJ, {
                        value: e,
                        shape: l.XZJ.Shapes.BOX,
                        type: l.XZJ.Types.INVERTED,
                        onChange: this.handleMute
                    })
                })
            ]
        });
    }
    render() {
        let { highlight: e } = this.state;
        return (0, i.jsxs)(l.Zbd, {
            ref: this.contentDomRef,
            outline: !0,
            editable: !0,
            className: e ? j.overrideHighlight : j.override,
            children: [
                this.renderName(),
                this.renderOptions(),
                (0, i.jsx)(a.Z, {
                    className: j.removeOverride,
                    onClick: this.handleDelete
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            S(this, '_timeout', void 0),
            S(this, 'contentDomRef', s.createRef()),
            S(this, 'state', { highlight: !1 }),
            S(this, 'unhighlight', () => {
                this.setState({ highlight: !1 });
            }),
            S(this, 'handleMute', (e, t) => {
                let { messageNotifications: n } = this.props;
                this.setMessageNotification(null != n ? n : p.bL.NULL, t, x.UE.muted(t));
            }),
            S(this, 'handleDelete', () => {
                let { onDelete: e, channel: t } = this.props;
                this.setMessageNotification(p.bL.NULL, !1, x.ZB.OverrideDeleted), null != e && e(t.id);
            });
    }
}
