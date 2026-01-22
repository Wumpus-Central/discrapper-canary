n.d(t, {
    C: () => u,
});
var r = n(976860),
    i = n(802958),
    a = n(456874),
    s = n(95701),
    o = n(576705),
    l = n(661191),
    c = n(652215);

function u(e) {
    var t, n, u, d, f;
    let p = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && s.Le.has(e.type)
        ? {
              location: p ? (0, r.PR)() : void 0,
              thread_approximate_member_count: i.A.getMemberCount(e.id),
              thread_approximate_message_count: a.A.getCount(e.id),
              thread_archived: (null == (u = e.threadMetadata) ? void 0 : u.archived) === !0,
              thread_locked: null != (t = null == (d = e.threadMetadata) ? void 0 : d.locked) && t,
              thread_auto_archive_duration_minutes:
                  null != (n = null == (f = e.threadMetadata) ? void 0 : f.autoArchiveDuration) ? n : 0,
              thread_approximate_creation_date: l.default.extractTimestamp(e.id),
              can_send_message: o.A.can(c.xBc.SEND_MESSAGES, e),
              parent_channel_type: e.parentChannelThreadType,
          }
        : null;
}
