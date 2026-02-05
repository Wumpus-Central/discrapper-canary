"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(679492),
    s = n(403777),
    o = n(23568),
    l = n(187921),
    u = n(518477),
    c = n(996988);
function d(e) {
    let { interactionType: t, interactionSource: n, themeType: r } = e;
    return t === u.AQ.REACT
        ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
        : r === c.d.MODAL || r === c.d.MODAL_V2 || n === u.dS.ACTIVITY
          ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
          : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
}
function _(e) {
    let { user: t, guildId: n, channelId: _, themeType: f, onClose: p, children: h, ...m } = e,
        {
            interactionType: g,
            interactionSource: E,
            resetInteraction: A,
            interactionSourceId: I,
            interactionPopoutTargetRef: T,
        } = (0, a.Pq)(),
        y = [c.d.MODAL, c.d.MODAL_V2].includes(f) ? (0, s.n)(t.id, n) : void 0,
        S = E === m.sourceType && g === u.AQ.REACT,
        v = E === m.sourceType && g === u.AQ.REPLY,
        C = (S || v) && I === m.sourceId;
    return (0, r.jsx)(i.YNO, {
        targetElementRef: T ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: i } = e,
                a = S ? o.A : l.A;
            return (0, r.jsx)(a, {
                user: t,
                guildId: n,
                channelId: _,
                themeType: f,
                onClose: p,
                modalKey: y,
                setPopoutRef: i,
                ...m,
            });
        },
        onRequestClose: () => {
            A(), p?.();
        },
        shouldShow: C,
        ...d({ interactionType: g, interactionSource: E, themeType: f }),
        children: h,
    });
}
