"use strict";
n.d(t, { C: () => c });
var r = n(976860),
    i = n(802958),
    a = n(456874),
    s = n(95701),
    o = n(576705),
    l = n(661191),
    u = n(652215);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && s.Le.has(e.type)
        ? {
              location: t ? (0, r.PR)() : void 0,
              thread_approximate_member_count: i.A.getMemberCount(e.id),
              thread_approximate_message_count: a.A.getCount(e.id),
              thread_archived: e.threadMetadata?.archived === !0,
              thread_locked: e.threadMetadata?.locked ?? !1,
              thread_auto_archive_duration_minutes: e.threadMetadata?.autoArchiveDuration ?? 0,
              thread_approximate_creation_date: l.default.extractTimestamp(e.id),
              can_send_message: o.A.can(u.xBc.SEND_MESSAGES, e),
              parent_channel_type: e.parentChannelThreadType,
          }
        : null;
}
