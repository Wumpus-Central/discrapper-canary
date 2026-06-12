"use strict";
n.d(t, { C: () => c });
var i = n(976860),
    r = n(802958),
    s = n(456874),
    a = n(95701),
    o = n(576705),
    l = n(935208),
    u = n(652215);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && a.Le.has(e.type)
        ? {
              location: t ? (0, i.PR)() : void 0,
              thread_approximate_member_count: r.A.getMemberCount(e.id),
              thread_approximate_message_count: s.A.getCount(e.id),
              thread_archived: e.threadMetadata?.archived === !0,
              thread_locked: e.threadMetadata?.locked ?? !1,
              thread_auto_archive_duration_minutes: e.threadMetadata?.autoArchiveDuration ?? 0,
              thread_approximate_creation_date: l.default.extractTimestamp(e.id),
              can_send_message: o.A.can(u.xBc.SEND_MESSAGES, e),
              parent_channel_type: e.parentChannelThreadType,
          }
        : null;
}
