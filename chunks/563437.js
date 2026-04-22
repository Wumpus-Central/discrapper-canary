n.d(t, { A: () => d });
var a = n(627968);
n(64700);
var r = n(265872),
    l = n(679492),
    i = n(403777),
    o = n(23568),
    s = n(187921),
    c = n(518477),
    u = n(996988);
function d(e) {
    let { user: t, guildId: n, channelId: d, themeType: f, onClose: _, children: h, ...A } = e,
        {
            interactionType: p,
            interactionSource: m,
            resetInteraction: S,
            interactionSourceId: g,
            interactionPopoutTargetRef: b,
        } = (0, l.Pq)(),
        x = [u.d.MODAL, u.d.MODAL_V2].includes(f) ? (0, i.n)(t.id, n) : void 0,
        T = m === A.sourceType && p === c.AQ.REACT,
        E = m === A.sourceType && p === c.AQ.REPLY,
        R = (T || E) && g === A.sourceId;
    return (0, a.jsx)(r.Y, {
        targetElementRef: b ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: r } = e,
                l = T ? o.A : s.A;
            return (0, a.jsx)(l, {
                user: t,
                guildId: n,
                channelId: d,
                themeType: f,
                onClose: _,
                modalKey: x,
                setPopoutRef: r,
                ...A,
            });
        },
        onRequestClose: () => {
            S(), _?.();
        },
        shouldShow: R,
        ...(function (e) {
            let { interactionType: t, interactionSource: n, themeType: a } = e;
            return t === c.AQ.REACT
                ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                : a === u.d.MODAL || a === u.d.MODAL_V2 || n === c.dS.ACTIVITY
                  ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                  : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
        })({ interactionType: p, interactionSource: m, themeType: f }),
        children: h,
    });
}
