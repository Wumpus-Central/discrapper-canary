n.d(t, { y: () => u });
var i = n(627968),
    l = n(64700),
    s = n(357758),
    r = n(311907),
    a = n(36525),
    o = n(997509),
    d = n(555337),
    c = n(927573);
function u() {
    let { guild: e, originalGuild: t, submitting: n, errors: u } = (0, r.cf)([d.A], () => d.A.getProps()),
        m = l.useMemo(() => (0, c.$s)(u), [u]),
        g = l.useCallback(async () => {
            if (null == e) return Promise.resolve();
            let n = {
                systemChannelFlags: e.systemChannelFlags,
                systemChannelId: e.systemChannelId,
                afkChannelId: e.afkChannelId,
                afkTimeout: e.afkTimeout,
                defaultMessageNotifications: e.defaultMessageNotifications,
            };
            if (
                ((0, s._)(new Set(e.features), new Set(t.features)) || (n.features = e.features),
                d.A.hasChanges() && (await o.A.saveGuild(e.id, n)),
                d.A.widgetHasChanges())
            ) {
                let { enabled: t, channelId: n } = d.A.getWidget();
                await o.A.updateEmbed(e.id, t, n);
            }
            return Promise.resolve();
        }, [e, t]),
        h = l.useCallback(() => {
            null != e && o.A.init(e.id);
        }, [e]);
    return (0, i.jsx)(a.A, { submitting: n, errorMessage: m, onSave: g, onReset: h });
}
