"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(265872),
    s = n(679492),
    a = n(403777),
    o = n(23568),
    l = n(187921),
    u = n(518477),
    c = n(996988);
function d(e) {
    let { user: t, guildId: n, channelId: d, themeType: _, onClose: f, children: p, ...h } = e,
        {
            interactionType: E,
            interactionSource: m,
            resetInteraction: g,
            interactionSourceId: A,
            interactionPopoutTargetRef: I,
        } = (0, s.Pq)(),
        T = [c.d.MODAL, c.d.MODAL_V2].includes(_) ? (0, a.n)(t.id, n) : void 0,
        S = m === h.sourceType && E === u.AQ.REACT,
        y = m === h.sourceType && E === u.AQ.REPLY,
        N = (S || y) && A === h.sourceId;
    return (0, r.jsx)(i.Y, {
        targetElementRef: I ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: i } = e,
                s = S ? o.A : l.A;
            return (0, r.jsx)(s, {
                user: t,
                guildId: n,
                channelId: d,
                themeType: _,
                onClose: f,
                modalKey: T,
                setPopoutRef: i,
                ...h,
            });
        },
        onRequestClose: () => {
            g(), f?.();
        },
        shouldShow: N,
        ...(function (e) {
            let { interactionType: t, interactionSource: n, themeType: r } = e;
            return t === u.AQ.REACT
                ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                : r === c.d.MODAL || r === c.d.MODAL_V2 || n === u.dS.ACTIVITY
                  ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                  : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
        })({ interactionType: E, interactionSource: m, themeType: _ }),
        children: p,
    });
}
