"use strict";
n.d(t, { $: () => c, p: () => o });
var i = n(192308),
    l = n(486020),
    s = n(339143),
    r = n(80569),
    a = n(608640);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (!(0, s.W)()) {
        (0, i.closeModal)(r.y), e.onClose?.();
        return;
    }
    (0, a.J)({
        onConfirm: () => {
            (0, i.closeModal)(r.y), e.onClose?.();
        },
    });
}
async function c(e) {
    let t = l.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: 128, forcePNG: !0 }),
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
    let r = new File([i], `${e.name}.${s.split("/")[1]}`, { type: s });
    return {
        data: await new Promise((e, t) => {
            let n = new FileReader();
            (n.onloadend = () => e(n.result)), (n.onerror = t), n.readAsDataURL(i);
        }),
        file: r,
        image: null,
    };
}
