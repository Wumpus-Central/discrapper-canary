"use strict";
n.d(t, { $: () => c, p: () => u });
var l = n(192308),
    i = n(486020),
    s = n(339143),
    r = n(80569),
    a = n(157559),
    o = n(375708);
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (!(0, s.W)()) {
        (0, l.closeModal)(r.y), e.onClose?.();
        return;
    }
    !(function (e) {
        let { onConfirm: t } = e;
        a.A.show({
            title: o.intl.string(o.t.rWQr9U),
            body: o.intl.string(o.t["7Aa3S7"]),
            confirmText: o.intl.string(o.t["/k52hw"]),
            confirmVariant: "critical-primary",
            cancelText: o.intl.string(o.t["4nkxA+"]),
            onConfirm: t,
            onCancel: () => {
                a.A.close();
            },
        });
    })({
        onConfirm: () => {
            (0, l.closeModal)(r.y), e.onClose?.();
        },
    });
}
async function c(e) {
    let t = i.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: 128, forcePNG: !0 }),
        n = await fetch(t),
        l = await n.blob(),
        s = l.type;
    (null == s || "application/octet-stream" === s) &&
        (s = t.includes(".gif")
            ? "image/gif"
            : t.includes(".webp")
              ? "image/webp"
              : e.animated
                ? "image/gif"
                : "image/png");
    let r = new File([l], `${e.name}.${s.split("/")[1]}`, { type: s });
    return {
        data: await new Promise((e, t) => {
            let n = new FileReader();
            (n.onloadend = () => e(n.result)), (n.onerror = t), n.readAsDataURL(l);
        }),
        file: r,
        image: null,
    };
}
