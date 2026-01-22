n.d(t, { y: () => u }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(357758),
    s = n(311907),
    a = n(36525),
    c = n(997509),
    o = n(555337),
    d = n(927573);
function u() {
    let { guild: e, originalGuild: t, submitting: n, errors: u } = (0, s.cf)([o.A], () => o.A.getProps()),
        f = i.useMemo(() => (0, d.$s)(u), [u]),
        g = i.useCallback(async () => {
            if (null == e) return Promise.resolve();
            let n = {
                systemChannelFlags: e.systemChannelFlags,
                systemChannelId: e.systemChannelId,
                afkChannelId: e.afkChannelId,
                afkTimeout: e.afkTimeout,
                defaultMessageNotifications: e.defaultMessageNotifications,
            };
            if (
                ((0, l._)(new Set(e.features), new Set(t.features)) || (n.features = e.features),
                o.A.hasChanges() && (await c.A.saveGuild(e.id, n)),
                o.A.widgetHasChanges())
            ) {
                let { enabled: t, channelId: n } = o.A.getWidget();
                await c.A.updateEmbed(e.id, t, n);
            }
            return Promise.resolve();
        }, [e, t]),
        b = i.useCallback(() => {
            null != e && c.A.init(e.id);
        }, [e]);
    return (0, r.jsx)(a.A, {
        submitting: n,
        errorMessage: f,
        onSave: g,
        onReset: b,
    });
}
