n.d(t, { K: () => u });
var r = n(703656),
    i = n(260483),
    o = n(144140),
    a = n(131704),
    s = n(496675),
    l = n(709054),
    c = n(981631);
function u(e) {
    var t, n, u, d, f;
    let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && a.Ec.has(e.type)
        ? {
              location: _ ? (0, r.At)() : void 0,
              thread_approximate_member_count: i.Z.getMemberCount(e.id),
              thread_approximate_message_count: o.Z.getCount(e.id),
              thread_archived: (null == (t = e.threadMetadata) ? void 0 : t.archived) === !0,
              thread_locked: null != (d = null == (n = e.threadMetadata) ? void 0 : n.locked) && d,
              thread_auto_archive_duration_minutes: null != (f = null == (u = e.threadMetadata) ? void 0 : u.autoArchiveDuration) ? f : 0,
              thread_approximate_creation_date: l.default.extractTimestamp(e.id),
              can_send_message: s.Z.can(c.Plq.SEND_MESSAGES, e),
              parent_channel_type: e.parentChannelThreadType
          }
        : null;
}
