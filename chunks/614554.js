n.d(t, { Z: () => r });
var i = n(314897),
    l = n(981631);
function r(e) {
    if (l.TPd.CALLABLE.has(e.type)) {
        var t;
        return (null === (t = e.recipients) || void 0 === t ? void 0 : t.length) === 1 ? e.recipients[0] : null;
    }
    return i.default.getId();
}
