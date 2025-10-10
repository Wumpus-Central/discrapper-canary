n.d(t, { Q: () => l }), n(35282);
var r = n(768581),
    i = n(598117);
async function l(e) {
    let t = r.ZP.getEmojiURL({
            id: e.id,
            animated: e.animated,
            size: i.eT,
            forcePNG: !0,
        }),
        n = await fetch(t),
        l = await n.blob(),
        a = l.type;
    (null == a || "application/octet-stream" === a) &&
        (a = t.includes(".gif")
            ? "image/gif"
            : t.includes(".webp")
              ? "image/webp"
              : e.animated
                ? "image/gif"
                : "image/png");
    let s = new File([l], "".concat(e.name, ".").concat(a.split("/")[1]), { type: a });
    return {
        data: await new Promise((e, t) => {
            let n = new FileReader();
            (n.onloadend = () => e(n.result)), (n.onerror = t), n.readAsDataURL(l);
        }),
        file: s,
        image: null,
    };
}
