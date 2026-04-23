n.d(t, { M: () => c });
var i = n(933958),
    r = n(663278),
    a = n(91242),
    l = n(859703),
    s = n(792620);
n(590889);
var o = n(592653),
    d = n(652215),
    u = n(360469);
function c(e, t, n) {
    switch (t) {
        case d.ZE4.ACTIVITY_PIP_MODE_UPDATE: {
            let t = e.application?.id,
                n = null != t ? i.Ay.getLayoutModeForApp(t) : null;
            return null != n ? { is_pip_mode: n !== u.bN.FOCUSED } : null;
        }
        case d.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE: {
            let t = e.application?.id,
                n = null != t ? i.Ay.getLayoutModeForApp(t) : null;
            return null != n ? { layout_mode: n } : null;
        }
        case d.ZE4.FRAME_LAYOUT_MODE_UPDATE: {
            let t = null != e.application?.id ? a.A.getConnectedFrame()?.layoutMode : null;
            return null != t ? { layout_mode: t } : null;
        }
        case d.ZE4.THERMAL_STATE_UPDATE: {
            let e = (0, r.zw)();
            if (e === r.MW.UNHANDLED) return null;
            return { thermal_state: e };
        }
        case d.ZE4.ORIENTATION_UPDATE:
            return null;
        case d.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
            return (0, o.Y$)();
        case d.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE: {
            let { quest_id: t } = n;
            if (!t) return null;
            let i = l.A.getQuest(t),
                r = (0, s.TP)(i);
            if (null == i || null == r || r !== e.application?.id) return null;
            return {
                quest_id: t,
                is_enrolled: i.userStatus?.enrolledAt != null,
                enrolled_at: i.userStatus?.enrolledAt ?? null,
            };
        }
        default:
            return null;
    }
}
