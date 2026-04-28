"use strict";
n.d(t, { $: () => u, p: () => c });
var l = n(192308),
    i = n(486020),
    s = n(339143),
    a = n(80569),
    r = n(157559),
    o = n(985018);
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (!(0, s.W)()) {
        (0, l.closeModal)(a.y), e.onClose?.();
        return;
    }
    !(function (e) {
        let { onConfirm: t } = e;
        r.A.show({
            title: o.intl.string(o.t.rWQr9U),
            body: o.intl.string(o.t["7Aa3S7"]),
            confirmText: o.intl.string(o.t["/k52hw"]),
            confirmVariant: "critical-primary",
            cancelText: o.intl.string(o.t["4nkxA+"]),
            onConfirm: t,
            onCancel: () => {
                r.A.close();
            },
        });
    })({
        onConfirm: () => {
            (0, l.closeModal)(a.y), e.onClose?.();
        },
    });
}
async function u(e) {
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
    let a = new File([l], `${e.name}.${s.split("/")[1]}`, { type: s });
    return {
        data: await new Promise((e, t) => {
            let n = new FileReader();
            (n.onloadend = () => e(n.result)), (n.onerror = t), n.readAsDataURL(l);
        }),
        file: a,
        image: null,
    };
}
