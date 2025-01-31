n.d(t, { Z: () => r });
var i = n(981631);
function r(e) {
    var t;
    return (e.type === i.IIU.LISTENING || e.type === i.IIU.WATCHING) && (null === (t = e.timestamps) || void 0 === t ? void 0 : t.start) != null && null != e.timestamps.end;
}
