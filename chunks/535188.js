n.d(t, { Z: () => r });
var a = n(951288);
n(647438);
var i = n(132392),
    l = n(342781);
let r = (e) => {
    var t;
    let { onSubmit: n, disabled: r } = e,
        { task: s } = (0, i.T)(),
        o = l.o[s.ui_component.component.type];
    return null == o
        ? null
        : (0, a.jsx)(o, {
              configData: s.ui_component.component.data,
              onSubmit: n,
              taskId: s.task_id,
              flowId: null == (t = s.flow_context) ? void 0 : t.flow_id,
              assignmentId: s.assignment_id,
              disabled: r,
          });
};
