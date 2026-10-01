n.d(t, { $: () => u, p: () => c });
var i = n(192308),
    s = n(486020),
    l = n(339143),
    r = n(80569),
    a = n(157559),
    o = n(375708);
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (!(0, l.W)()) {
        ((0, i.closeModal)(r.y), e.onClose?.());
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
            ((0, i.closeModal)(r.y), e.onClose?.());
        },
    });
}
async function u(e) {
    let t = s.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: 128, forcePNG: !0 }),
        n = await fetch(t),
        i = await n.blob(),
        l = i.type;
    (null == l || "application/octet-stream" === l) &&
        (l = t.includes(".gif")
            ? "image/gif"
            : t.includes(".webp")
              ? "image/webp"
              : e.animated
                ? "image/gif"
                : "image/png");
    let r = new File([i], `${e.name}.${l.split("/")[1]}`, { type: l });
    return {
        data: await new Promise((e, t) => {
            let n = new FileReader();
            ((n.onloadend = () => e(n.result)), (n.onerror = t), n.readAsDataURL(i));
        }),
        file: r,
        image: null,
    };
}
