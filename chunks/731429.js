r.d(n, {
    K: function () {
        return d;
    }
});
var i = r(703656),
    a = r(260483),
    o = r(144140),
    s = r(131704),
    l = r(496675),
    u = r(709054),
    c = r(981631);
function d(e) {
    var n, r, d, f, p;
    let h = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && s.Ec.has(e.type)
        ? {
              location: h ? (0, i.At)() : void 0,
              thread_approximate_member_count: a.Z.getMemberCount(e.id),
              thread_approximate_message_count: o.Z.getCount(e.id),
              thread_archived: (null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.archived) === !0,
              thread_locked: null !== (f = null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) && void 0 !== f && f,
              thread_auto_archive_duration_minutes: null !== (p = null === (d = e.threadMetadata) || void 0 === d ? void 0 : d.autoArchiveDuration) && void 0 !== p ? p : 0,
              thread_approximate_creation_date: u.default.extractTimestamp(e.id),
              can_send_message: l.Z.can(c.Plq.SEND_MESSAGES, e),
              parent_channel_type: e.parentChannelThreadType
          }
        : null;
}
