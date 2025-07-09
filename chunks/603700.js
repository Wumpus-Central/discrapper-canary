n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
let i = { refresh_app: n(286813).Z },
    a = (e) => {
        var t;
        let { task: n, onSubmit: a, disabled: l } = e,
            c = i[n.ui_component.type];
        return null == c
            ? null
            : (0, r.jsx)(c, {
                  configData: n.ui_component.data,
                  onSubmit: a,
                  taskId: n.task_id,
                  flowId: null == (t = n.flow_context) ? void 0 : t.flow_id,
                  assignmentId: n.assignment_id,
                  disabled: l
              });
    };
