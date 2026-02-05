"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    s = n(311907),
    l = n(287809),
    r = n(41237),
    a = n(631576);
function o(e) {
    let [t, n] = i.useState("loading"),
        o = (0, s.bG)([r.A], () => r.A.getStickersByGuildId(e));
    return (i.useEffect(() => {
        let t = new AbortController(),
            i = t.signal;
        return (
            (async () => {
                try {
                    await (0, a.oI)(e, i), n("success"), (t = null);
                } catch (e) {
                    n("error"), (t = null);
                }
            })(),
            () => {
                n("loading"), t?.abort();
            }
        );
    }, [e]),
    "success" === t)
        ? {
              status: t,
              stickers: o.map((e) => {
                  let t = l.default.getUser(e.user_id);
                  return null != t ? { ...e, user: t } : e;
              }),
          }
        : { status: t };
}
