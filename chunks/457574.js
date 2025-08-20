n.d(t, { Q: () => i }), n(35282);
var r = n(768581),
    l = n(598117);
async function i(e) {
    let t = r.ZP.getEmojiURL({
            id: e.id,
            animated: e.animated,
            size: l.eT,
            forcePNG: !0,
        }),
        n = await fetch(t),
        i = await n.blob(),
        a = i.type;
    (null == a || "application/octet-stream" === a) &&
        (a = t.includes(".gif")
            ? "image/gif"
            : t.includes(".webp")
              ? "image/webp"
              : e.animated
                ? "image/gif"
                : "image/png");
    let o = new File([i], "".concat(e.name, ".").concat(a.split("/")[1]), { type: a });
    return {
        data: await new Promise((e, t) => {
            let n = new FileReader();
            (n.onloadend = () => e(n.result)), (n.onerror = t), n.readAsDataURL(i);
        }),
        file: o,
        image: null,
    };
}
