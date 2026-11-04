n(938796);
var i = n(435558),
    r = n(630986);
function a(e) {
    let t = e.attachments.map((e) => ({ ...e, content_scan_version: -1 })),
        n = e.embeds.map((e) => {
            if (null == e.components) return { ...e, contentScanVersion: -1 };
            let t = (0, i.cloneDeep)(e.components);
            return (s(t), { ...e, contentScanVersion: -1, components: t });
        }),
        r = (0, i.cloneDeep)(e.components);
    return (s(r), { attachments: t, embeds: n, components: r });
}
function s(e) {
    for (let t of (0, r.A)(e)) t.contentScanMetadata = { version: -1, flags: t.contentScanMetadata?.flags ?? 0 };
}
(n(961440),
    n.d(
        t,
        {},
        {
            T: function (e) {
                let { attachments: t, embeds: n, components: i } = a(e),
                    r = (function (e) {
                        let { messageSnapshots: t } = e;
                        return null == t || 0 === t.length
                            ? t
                            : t.map((e) => {
                                  let { message: t } = e,
                                      { attachments: n, embeds: i, components: r } = a(t);
                                  return (
                                      (t = t.merge({ attachments: n, embeds: i, components: r })),
                                      (e = e.merge({ message: t }))
                                  );
                              });
                    })(e);
                return e.merge({ attachments: t, embeds: n, components: i, messageSnapshots: r });
            },
        },
    ));
