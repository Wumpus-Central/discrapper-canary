var i,
    r,
    l,
    a,
    s = n(442837),
    o = n(570140),
    c = n(496675),
    d = n(981631);
function u() {
    return !0;
}
class h extends (a = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z), this.syncWith([c.Z], u);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= d.Hqc && c.Z.can(d.Plq.ADMINISTRATOR, e);
    }
}
(l = 'InviteNoticeStore'),
    (r = 'displayName') in (i = h)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new h(o.Z));
