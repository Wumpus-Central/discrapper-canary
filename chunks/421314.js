"use strict";
n.d(t, { $: () => u, p: () => l });
var r = n(192308),
    i = n(486020),
    s = n(339143),
    a = n(80569),
    o = n(608640);
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (!(0, s.W)()) {
        (0, r.closeModal)(a.y), e.onClose?.();
        return;
    }
    (0, o.J)({
        onConfirm: () => {
            (0, r.closeModal)(a.y), e.onClose?.();
        },
    });
}
async function u(e) {
    let t = i.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: 128, forcePNG: !0 }),
        n = await fetch(t),
        r = await n.blob(),
        s = r.type;
    (null == s || "application/octet-stream" === s) &&
        (s = t.includes(".gif")
            ? "image/gif"
            : t.includes(".webp")
              ? "image/webp"
              : e.animated
                ? "image/gif"
                : "image/png");
    let a = new File([r], `${e.name}.${s.split("/")[1]}`, { type: s });
    return {
        data: await new Promise((e, t) => {
            let n = new FileReader();
            (n.onloadend = () => e(n.result)), (n.onerror = t), n.readAsDataURL(r);
        }),
        file: a,
        image: null,
    };
}
