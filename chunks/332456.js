"use strict";
n.d(t, { C: () => c });
var i = n(976860),
    r = n(802958),
    a = n(456874),
    s = n(95701),
    l = n(576705),
    o = n(935208),
    d = n(652215);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && s.Le.has(e.type)
        ? {
              location: t ? (0, i.PR)() : void 0,
              thread_approximate_member_count: r.A.getMemberCount(e.id),
              thread_approximate_message_count: a.A.getCount(e.id),
              thread_archived: e.threadMetadata?.archived === !0,
              thread_locked: e.threadMetadata?.locked ?? !1,
              thread_auto_archive_duration_minutes: e.threadMetadata?.autoArchiveDuration ?? 0,
              thread_approximate_creation_date: o.default.extractTimestamp(e.id),
              can_send_message: l.A.can(d.xBc.SEND_MESSAGES, e),
              parent_channel_type: e.parentChannelThreadType,
          }
        : null;
}
