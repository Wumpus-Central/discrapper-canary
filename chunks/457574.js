n.d(t, { Q: () => a }), n(35282);
var r = n(768581),
    l = n(598117);
async function a(e) {
    let t = r.ZP.getEmojiURL({
            id: e.id,
            animated: e.animated,
            size: l.eT,
            forcePNG: !0,
        }),
        n = await fetch(t),
        a = await n.blob(),
        i = a.type;
    (null == i || "application/octet-stream" === i) &&
        (i = t.includes(".gif")
            ? "image/gif"
            : t.includes(".webp")
              ? "image/webp"
              : e.animated
                ? "image/gif"
                : "image/png");
    let s = new File([a], "".concat(e.name, ".").concat(i.split("/")[1]), { type: i });
    return {
        data: await new Promise((e, t) => {
            let n = new FileReader();
            (n.onloadend = () => e(n.result)), (n.onerror = t), n.readAsDataURL(a);
        }),
        file: s,
        image: null,
    };
}
