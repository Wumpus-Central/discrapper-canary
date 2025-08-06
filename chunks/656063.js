n.d(t, { Z: () => c });
var r = n(503438),
    i = n(802856),
    o = n(420660),
    a = n(789407),
    s = n(630186),
    l = n(250889);
function c(e) {
    return (0, i.Z)(e)
        ? l.H + e.name
        : (0, r.Z)(e) && null != e.party && null != e.party.id
          ? a.r9.id
          : (0, o.Z)(e) && null != e.url
            ? s._ + e.url
            : null != e.application_id
              ? e.application_id
              : null;
}
