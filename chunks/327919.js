n.d(i, { A: () => s });
var t = n(308528),
    a = n(378570),
    r = n(734057);
async function s(e, i, n) {
    if (e.length > 1) {
        let n,
            t =
                ((n = new Set(e)),
                r.A.getSortedPrivateChannels().find(
                    (e) => e.isGroupDM() && e.recipients.length === n.size && e.recipients.every((e) => n.has(e)),
                )?.id);
        if (null != t) {
            (i(), (0, a.iN)(t, { navigationReplace: !0 }));
            return;
        }
    }
    try {
        await t.A.openPrivateChannel({ recipientIds: e, onBeforeTransition: i });
    } catch {
        n();
    }
}
