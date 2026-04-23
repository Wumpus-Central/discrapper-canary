"use strict";
n.d(t, { $: () => _, p: () => d });
var i = n(192308),
    r = n(486020),
    s = n(339143),
    a = n(80569),
    o = n(157559),
    l = n(985018);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (!(0, s.W)()) {
        (0, i.closeModal)(a.y), e.onClose?.();
        return;
    }
    !(function (e) {
        let { onConfirm: t } = e;
        o.A.show({
            title: l.intl.string(l.t.rWQr9U),
            body: l.intl.string(l.t["7Aa3S7"]),
            confirmText: l.intl.string(l.t["/k52hw"]),
            confirmVariant: "critical-primary",
            cancelText: l.intl.string(l.t["4nkxA+"]),
            onConfirm: t,
            onCancel: () => {
                o.A.close();
            },
        });
    })({
        onConfirm: () => {
            (0, i.closeModal)(a.y), e.onClose?.();
        },
    });
}
async function _(e) {
    let t = r.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: 128, forcePNG: !0 }),
        n = await fetch(t),
        i = await n.blob(),
        s = i.type;
    (null == s || "application/octet-stream" === s) &&
        (s = t.includes(".gif")
            ? "image/gif"
            : t.includes(".webp")
              ? "image/webp"
              : e.animated
                ? "image/gif"
                : "image/png");
    let a = new File([i], `${e.name}.${s.split("/")[1]}`, { type: s });
    return {
        data: await new Promise((e, t) => {
            let n = new FileReader();
            (n.onloadend = () => e(n.result)), (n.onerror = t), n.readAsDataURL(i);
        }),
        file: a,
        image: null,
    };
}
