n.d(t, {
    CD: () => h,
    Wn: () => p,
    ZD: () => g,
    j7: () => f,
});
var i = n(64700),
    r = n(956793),
    l = n(961350),
    a = n(810412),
    s = n(145567),
    o = n(67103),
    u = n(34307),
    c = n(652215);

function d(e) {
    null != e && (e.preventDefault(), e.stopPropagation());
}

function h(e) {
    let { channelId: t, isExpanded: n, onToggleExpanded: l } = e;
    return i.useCallback(
        (e) => {
            d(e),
                (0, a.YX)(c.uss.FRIENDS, {
                    type: a.Z5.VOICE,
                    value: a.IP.CHANNEL_SELECTED,
                    secondaryValue: "voice",
                }),
                r.default.selectVoiceChannel(t),
                n || null == l || l(t);
        },
        [t, n, l],
    );
}

function p() {
    return i.useCallback((e) => {
        d(e),
            (0, a.YX)(c.uss.FRIENDS, {
                type: a.Z5.CALL_BUTTON,
                value: a.IP.DISABLED,
                secondaryValue: "voice",
                userId: l.default.getId(),
            }),
            r.default.disconnect();
    }, []);
}

function f(e) {
    let { channelId: t, guildId: n, shouldStopEvent: r } = e;
    return i.useCallback(
        (e) => {
            r && d(e),
                (0, s.D$)({
                    channelId: t,
                    source: u.B.FRIENDS_WIDGET_CLICK,
                    guildId: n,
                    messageId: null,
                    widgetType: c.uss.FRIENDS,
                });
        },
        [t, n, r],
    );
}

function g(e) {
    let { userId: t, onAction: n, closeParentPopout: r } = e;
    return i.useCallback(
        (e) => {
            d(e), null == n || n(o.x.OPEN_DIRECT_MESSAGE, t), null == r || r();
        },
        [r, n, t],
    );
}
