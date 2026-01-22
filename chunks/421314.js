n.d(t, {
    $: () => c,
    p: () => l,
}),
    n(747238);
var r = n(397927),
    i = n(486020),
    a = n(339143),
    s = n(80569),
    o = n(608640);

function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (!(0, a.W)()) {
        var t;
        (0, r.OoC)(s.y), null == (t = e.onClose) || t.call(e);
        return;
    }
    (0, o.J)({
        onConfirm: () => {
            var t;
            (0, r.OoC)(s.y), null == (t = e.onClose) || t.call(e);
        },
    });
}
async function c(e) {
    let t = i.Ay.getEmojiURL({
            id: e.id,
            animated: e.animated,
            size: 128,
            forcePNG: !0,
        }),
        n = await fetch(t),
        r = await n.blob(),
        a = r.type;
    (null == a || "application/octet-stream" === a) &&
        (a = t.includes(".gif")
            ? "image/gif"
            : t.includes(".webp")
              ? "image/webp"
              : e.animated
                ? "image/gif"
                : "image/png");
    let s = new File([r], "".concat(e.name, ".").concat(a.split("/")[1]), {
        type: a,
    });
    return {
        data: await new Promise((e, t) => {
            let n = new FileReader();
            (n.onloadend = () => e(n.result)), (n.onerror = t), n.readAsDataURL(r);
        }),
        file: s,
        image: null,
    };
}
