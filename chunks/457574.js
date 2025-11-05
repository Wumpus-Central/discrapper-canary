n.d(t, {
    E: () => l,
    Q: () => c,
}),
    n(35282);
var r = n(481060),
    i = n(768581),
    a = n(539266),
    o = n(598117),
    s = n(221503);
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (!(0, a.m)()) {
        var t;
        (0, r.Mr3)(o.Hj), null == (t = e.onClose) || t.call(e);
        return;
    }
    (0, s.Q)({
        onConfirm: () => {
            var t;
            (0, r.Mr3)(o.Hj), null == (t = e.onClose) || t.call(e);
        },
    });
}
async function c(e) {
    let t = i.ZP.getEmojiURL({
            id: e.id,
            animated: e.animated,
            size: o.eT,
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
    let s = new File([r], "".concat(e.name, ".").concat(a.split("/")[1]), { type: a });
    return {
        data: await new Promise((e, t) => {
            let n = new FileReader();
            (n.onloadend = () => e(n.result)), (n.onerror = t), n.readAsDataURL(r);
        }),
        file: s,
        image: null,
    };
}
