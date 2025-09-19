n.d(t, { Z: () => o });
var r = n(592125),
    i = n(19780),
    a = n(938475);
function o(e) {
    var t;
    return null == e
        ? {
              channel_id: void 0,
              guild_id: void 0,
              media_session_id: i.Z.getMediaSessionId(),
              call_num_participants: 0,
          }
        : {
              channel_id: e,
              guild_id: null == (t = r.Z.getChannel(e)) ? void 0 : t.guild_id,
              media_session_id: i.Z.getMediaSessionId(),
              call_num_participants: a.ZP.countVoiceStatesForChannel(e),
          };
}
