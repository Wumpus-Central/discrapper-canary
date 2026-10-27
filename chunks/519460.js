(n.d(t, { T: () => s }), n(938796));
var i = n(435558),
    r = n(630986),
    a = n(961440);
function s(e) {
    let { attachments: t, embeds: n, components: i } = l(e),
        r = (function (e) {
            let { messageSnapshots: t } = e;
            return null == t || 0 === t.length
                ? t
                : t.map((e) => {
                      let { message: t } = e,
                          { attachments: n, embeds: i, components: r } = l(t);
                      return (
                          (t = t.merge({ attachments: n, embeds: i, components: r })), (e = e.merge({ message: t }))
                      );
                  });
        })(e);
    return e.merge({ attachments: t, embeds: n, components: i, messageSnapshots: r });
}
function l(e) {
    let t = e.attachments.map((e) => ({ ...e, content_scan_version: -1 })),
        n = e.embeds.map((e) => {
            if (null == e.components) return { ...e, contentScanVersion: -1 };
            let t = (0, i.cloneDeep)(e.components);
            return (o(t), { ...e, contentScanVersion: -1, components: t });
        }),
        r = (0, i.cloneDeep)(e.components);
    return (o(r), { attachments: t, embeds: n, components: r });
}
function o(e) {
    for (let t of (0, r.A)(e)) t.contentScanMetadata = { version: a.Ae, flags: t.contentScanMetadata?.flags ?? 0 };
}
